// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );
  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};


var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";
  //去掉粘贴到的首尾空格
  block = block.replace(/(^(&nbsp;\s*)*)|((&nbsp;\s*)*$)/g, "");
  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  // s.inspect = mk_block_inspect;
  // s.toSource = mk_block_toSource;

  if ( line != undefined ){s.lineNumber = line;}
  // 这里是将每个块域的首字母大写
    s=s.substr(0,1).toUpperCase()+s.substr(1,s.length-1);
  // 这里将中文的顿号自动替换为英文状态下的点
  return s.replace(/^([A-T]|\d+)([、，,．]|\s)/,"$1.");
};

function count_lines( str,blocks ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  //连续两次或以上换行，视为两道题的分割线
  // if (n>1) blocks.push("-------分割线-------");
  return n;
}
// 这里是将输入内容分割成块
// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // 这里是判断若选项位于同一行，则自动转行，判断依据是选项前有空格且选项后有点或顿号
  // 否则视为同一选项中的内容
  var n;
  // var res=/(\s)+([a-t])([、，,．]|\.|\s)/gi;
  var res=/(\s)+([a-t])([、，,．]|\.)/gi;

  input=input.replace(res,"\n$2$3");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  // 这是原先用的正则，一句话结束换行一次不会分割成块
  // var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
  // 两行中间没有空格也会显示成<p></p><p></p>
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)*)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0],blocks );
    re.lastIndex = m[0].length;
  }


  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0],blocks );
  }
  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};


/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    //自定义每题的题干、选项、答案和解析
    // 这是题干部分
    qtTitle: function qtTitle( block,next) {
      var m = block.match( /^(([0-9]+\.)|(((\()|（)[0-9]+((\))|）)))\s*(.*?)\s*(?:\n|$)/ );
      if ( !m ) return undefined;

      var title = [ "title" ];
      Array.prototype.push.apply(title, this.processInline(m[ 0 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [title];
    },
    //这是选项部分
    qtKey: function qtKey( block, next ) {
        var m = block.match( /^([A-T])(\.)\s*(.*?)\s*(?:\n|$)/ );
        if ( !m ) return undefined;

        if(qt_type=="1"||qt_type=="2"){
            var n=m[0].match(/^[A-T]/);
            var type="";
            switch (n[0]) {
                case "A": type="A"; break;
                case "B": type="B"; break;
                case "C": type="C"; break;
                case "D": type="D"; break;
                case "E": type="E"; break;
                case "F": type="F"; break;
                case "G": type="G"; break;
                case "H": type="H"; break;
                case "I": type="I"; break;
                case "J": type="J"; break;
                case "K": type="K"; break;
                case "L": type="L"; break;
                case "M": type="M"; break;
                case "N": type="N"; break;
                case "O": type="O"; break;
                case "P": type="P"; break;
                case "Q": type="Q"; break;
                case "R": type="R"; break;
                case "S": type="S"; break;
                case "T": type="T"; break;

                default: type="Error";
            }
            var key = [ "key"+type ];
            Array.prototype.push.apply(key, this.processInline(m[ 0 ]));

            if ( m[0].length < block.length )
              next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

            return [key];
        }else {
            var error = [ "error" ];
            Array.prototype.push.apply(error, this.processInline(m[ 0 ]));

            if ( m[0].length < block.length )
              next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );
            return [error];
        }
    },
    // 这是答案部分
    qtAnswer: function qtAnswer( block, next ) {
      var m = block.match( /^\s*(答案[:：])\s*(.*?)\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var answer = [ "answer" ];
      var n;
      if(qt_type=="1"){
          n=m[2].match(/^\s*[a-t]\s*(?:\n|$)/i);
          if(n==null){
              var error = [ "ans_error" ];
              Array.prototype.push.apply(error, this.processInline(m[0]));

              if ( m[0].length < block.length )
                next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );
              return [error];
          }
      }else if(qt_type=="2") {
          n=m[2].match(/^\s*[a-t]{2,20}\s*(?:\n|$)/i);
          if(n==null){
              var error = [ "ans_error" ];
              Array.prototype.push.apply(error, this.processInline(m[0]));

              if ( m[0].length < block.length )
                next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );
              return [error];
          }
      }else if (qt_type=="3") {
          n=m[2].match(/^\s*(正确|错误|对|错)\s*(?:\n|$)/i);
          if(n==null){
              var error = [ "ans_error" ];
              Array.prototype.push.apply(error, this.processInline(m[ 0 ]));

              if ( m[0].length < block.length )
                next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );
              return [error];
          }
      }
      Array.prototype.push.apply(answer, this.processInline(m[ 0 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [answer];
    },

    // 这是解析部分
    qtAnalysis: function qtAnalysis( block, next ) {
      var m = block.match( /^\s*(解析[:：])\s*(.*?)\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var analysis = [ "analysis" ];
      Array.prototype.push.apply(analysis, this.processInline(m[ 0 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [analysis];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;
      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }
      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[1].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }
      return out;
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};



// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );

    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );


Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }


  // 根据两道题之间的水平分割线来将题分割成整块
  var html = "";
  var html_temp = "";
  var loop_status = 0;//记录循环次数
  // 各种计数
  var params ={
      count : 0,//题目计数
      key_count : 0//单选多选选项计数
  };

  // 各组成部分状态——检查区
  var status = {
      "qt_title": false,
      "qt_key": false,
      "qt_answer": false,
      "qt_analysis": false,
      "qt_error": false
  };

  // 各组成部分需插入代码
  var insert ={
      "left": "<div class='question'>",
      "title": "<p class='qt_error'>题目（至少两个字）</p>",
      //key只存在于单选和多选
      "key": (qt_type=="1"||qt_type=="2") ? "<p class='qt_error'>选项（至少两项）</p>" : "",
      "answer": "<p class='qt_error'>答案</p>",
      "analysis": "",
      "error": "",
      "right": "</div>",
  };


  //检测字符串是题目中哪一部分，记录一整道题中各组成部分状态,存储各部分内容
  function regStr(string) {
      var qt_title = new RegExp("qt_title");
      var qt_key = new RegExp("key_");
      var qt_answer = new RegExp("qt_answer");
      var qt_analysis = new RegExp("qt_analysis");
      var qt_error = new RegExp("qt_error");
      //存储各部分内容
      insert.title =  qt_title.test(string) ? string : insert.title;
      if(params.key_count>1){
          insert.key = insert.key.replace("<p class='qt_error'>选项（至少两项）</p>","");
      }
      insert.key = qt_key.test(string) ? (insert.key+string) : insert.key;
      insert.answer = qt_answer.test(string) ? string : insert.answer;
      insert.analysis = qt_analysis.test(string) ? string : insert.analysis;
      insert.error = qt_error.test(string) ? string : insert.error;
      //记录一整道题中各组成部分状态
      status.qt_title = qt_title.test(string) ? true : status.qt_title;
      status.qt_key = qt_key.test(string) ? true : status.qt_key;
      status.qt_answer = qt_answer.test(string) ? true : status.qt_answer;
      status.qt_analysis = qt_analysis.test(string) ? true : status.qt_analysis;
      status.qt_error = qt_error.test(string) ? true : status.qt_error;
  }

  for (var i = 0; i < content.length; i++) {
      var title_reg = new RegExp("qt_title");
      var key_reg = new RegExp("key_");
      var error_reg = new RegExp("class='error'");
      // 根据loop_status判断是否跳过，凡跳一次，计数减一
      if(loop_status>0) {
          loop_status--;
          continue;
      }
      //这是无法识别出来的内容，统一视为上一项中的内容
      for (var j = i; j < content.length-1; j++) {//都是检测下一项，所以不用再去对最后一行做判断
          if ( error_reg.test(content[j+1])) {//检测当前项的下一项，若为error则与当前项拼接
              //当下一项中有图片（fr-dib是froala编辑器中图片的class）；并且当前项为答案时
              if(content[j+1].match('class="fr-dib"') && content[j].match('qt_answer')){
                  //判断题、填空题答案不能有图片
                  if((qt_type=="3"||qt_type=="4")){
                      content[j] = content[j].replace(/qt_answer/,'qt_answer qt_error');
                  }
                  //问答题的答案中不能只放图片(问答题；字符串长度小于4；答案；下一项是图片)
                  else if(qt_type=="5"){
                      var answerLength = $(content[j]).text().replace(/\s*/g,"").length;//答案长度
                      if(answerLength<4){
                          content[j] = content[j].replace(/qt_answer/,'qt_answer qt_error');
                      }
                  }
              }
              content[j+1] = (content[j]+content[j+1]).replace(/<\/p><p class='error'>/,"<br class='markdown_return'>");
              loop_status++;//记录需跳过的行数
          }else {
              break;//如遇到非error项则跳出循环
          }
      }
      // 根据loop_status判断是否跳过，凡跳一次，计数减一
      if(loop_status>0) {
          loop_status--;
          continue;
      }

      // 选项计数
      if(key_reg.test(content[i])){
          params.key_count++;
      }
      // 题目计数
      if(title_reg.test(content[i])){
          params.count++;
      }
      //检测字符串是题目中哪一部分，记录一整道题中各组成部分状态,存储各部分内容
      regStr(content[i]);

      if(params.count>1){
          //出现下一个title意味着上一题结束，重新初始化
          status = {
              "qt_title": false,
              "qt_key": false,
              "qt_answer": false,
              "qt_analysis": false,
              "qt_error": false,
          };
          insert = {
              "left": "<div class='question'>",
              "title": "<p class='qt_error'>题目（至少两个字）</p>",
              //key只存在于单选和多选
              "key": (qt_type=="1"||qt_type=="2") ? "<p class='qt_error'>选项（至少两项）</p>" : "",
              "answer": "<p class='qt_error'>答案</p>",
              "analysis": "",
              "error": "",
              "right": "</div>",
          };
          //   手动添加title状态
          status.qt_title = true;
          params.count = 1;
          params.key_count = 0;
          insert.title = content[i];
          html += insert.left + insert.title + insert.key + insert.answer + insert.analysis + insert.error + insert.right;
      }else {
          //如果单选题、多选题的选项中有图片
          if(insert.answer.match('class="fr-dib"') && (qt_type=="1"||qt_type=="2")){
              insert.error = "<p class='qt_error'>请勿在答案中写入图片</p>";
          }
          // 拼接所有部分，对整块question进行更新
          html_temp = insert.left + insert.title + insert.key + insert.answer + insert.analysis + insert.error + insert.right;
          //如果answer和error内容相同，就只显示answer
          if(insert.answer == insert.error){
              html_temp = insert.left + insert.title + insert.key + insert.answer + insert.analysis + insert.right;
          }
          var _index = html.lastIndexOf("<div class='question'>");
          html = html.substring(0, _index) + html_temp;
      }
  }
  content = html;
  return content;
};

function escapeHTML( text ) {
  // return text.replace( /&/g, "&amp;" )
  //            .replace( /</g, "&lt;" )
  //            .replace( />/g, "&gt;" )
  //            .replace( /"/g, "&quot;" )
  //            .replace( /'/g, "&#39;" )
  //            .replace( / /g, "&nbsp;")
    return text;
}

function render_tree( jsonml ) {
  // basic case

  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [],
      checkOrRadio = '';

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }
  if(qt_type=="1"){
      checkOrRadio = "<input class='checkOrRadio' type='radio' />";
  }else if(qt_type=="2") {
      checkOrRadio = "<input class='checkOrRadio' type='checkbox' />";
  }


  // be careful about adding whitespace here for inline elements
  //给试题各个部分添加相应的class
  switch (tag) {
     case "title":
       if(content.join( "" ).length<=3){
           tag_attrs=" class='qt_error'";
       }else {
           tag_attrs=" class='qt_title'";
       }
       return "<p" + tag_attrs + ">" + content.join( "" ).replace(/^([0-9]+\.)|(((\()|（)[0-9]+((\))|）))/,"<span class='title'>$1$2</span>") + "</p>";
     break;
     case "keyA":
       tag_attrs=" class='key_A'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("A.", "<span class='title'>A.</span>") + "</p>";
     break;
     case "keyB":
       tag_attrs=" class='key_B'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("B.", "<span class='title'>B.</span>") + "</p>";
     break;
     case "keyC":
       tag_attrs=" class='key_C'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("C.", "<span class='title'>C.</span>") + "</p>";
     break;
     case "keyD":
       tag_attrs=" class='key_D'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("D.", "<span class='title'>D.</span>") + "</p>";
     break;
     case "keyE":
       tag_attrs=" class='key_E'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("E.", "<span class='title'>E.</span>") + "</p>";
     break;
     case "keyF":
       tag_attrs=" class='key_F'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("F.", "<span class='title'>F.</span>") + "</p>";
     break;
     case "keyG":
       tag_attrs=" class='key_G'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("G.", "<span class='title'>G.</span>") + "</p>";
     break;
     case "keyH":
       tag_attrs=" class='key_H'";
       return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("H.", "<span class='title'>H.</span>") + "</p>";
     break;
      case "keyI":
      tag_attrs=" class='key_I'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("I.", "<span class='title'>I.</span>") + "</p>";
      break;
      case "keyJ":
      tag_attrs=" class='key_J'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("J.", "<span class='title'>J.</span>") + "</p>";
      break;
      case "keyK":
      tag_attrs=" class='key_K'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("K.", "<span class='title'>K.</span>") + "</p>";
      break;
      case "keyL":
      tag_attrs=" class='key_L'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("L.", "<span class='title'>L.</span>") + "</p>";
      break;
      case "keyM":
      tag_attrs=" class='key_M'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("M.", "<span class='title'>M.</span>") + "</p>";
      break;
      case "keyN":
      tag_attrs=" class='key_N'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("N.", "<span class='title'>N.</span>") + "</p>";
      break;
      case "keyO":
      tag_attrs=" class='key_O'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("O.", "<span class='title'>O.</span>") + "</p>";
      break;
      case "keyP":
      tag_attrs=" class='key_P'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("P.", "<span class='title'>P.</span>") + "</p>";
      break;
      case "keyQ":
      tag_attrs=" class='key_Q'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("Q.", "<span class='title'>Q.</span>") + "</p>";
      break;
      case "keyR":
      tag_attrs=" class='key_R'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("R.", "<span class='title'>R.</span>") + "</p>";
      break;
      case "keyS":
      tag_attrs=" class='key_S'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("S.", "<span class='title'>S.</span>") + "</p>";
      break;
      case "keyT":
      tag_attrs=" class='key_T'";
      return "<p" + tag_attrs + ">" + checkOrRadio + content.join( "" ).replace("T.", "<span class='title'>T.</span>") + "</p>";
      break;
     case "answer":
       tag_attrs=" class='qt_answer'";
       return "<p" + tag_attrs + ">" + content.join( "" ).replace(/(&nbsp;)*答案[:：]/,"<span class='title'>答案：</span>") + "</p>";
     break;
     case "ans_error":
         tag_attrs=" class='qt_error qt_answer'";
         return "<p" + tag_attrs + ">" + content.join( "" ).replace(/(&nbsp;)*答案[:：]/,"<span class='title'>答案：</span>") + "</p>";
         break;
     case "analysis":
       tag_attrs=" class='qt_analysis'";
       return "<p" + tag_attrs + ">" + content.join( "" ).replace(/(&nbsp;)*解析[:：]/,"<span class='title'>解析：</span>") + "</p>";
     break;
     case "key_error":
       tag_attrs=" class='qt_error qt_key'";
       return "<p"+ tag_attrs + ">" + content.join( "" ) + "</p>";
       break;
     default:
       tag_attrs=" class='error'";
       return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // 这是需要的部分，最基础的
  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  // 给试题添加相应标签
  switch ( jsonml[ 0 ] ) {
    case "title":
      jsonml[ 0 ] = "title";
      break;
    case "keyA":
      jsonml[ 0 ] = "keyA";
      break;
    case "keyB":
      jsonml[ 0 ] = "keyB";
      break;
    case "keyC":
      jsonml[ 0 ] = "keyC";
      break;
    case "keyD":
      jsonml[ 0 ] = "keyD";
      break;
    case "keyE":
      jsonml[ 0 ] = "keyE";
      break;
    case "keyF":
      jsonml[ 0 ] = "keyF";
      break;
    case "keyG":
      jsonml[ 0 ] = "keyG";
      break;
    case "keyH":
      jsonml[ 0 ] = "keyH";
      break;
    case "keyI":
      jsonml[ 0 ] = "keyI";
      break;
    case "keyJ":
      jsonml[ 0 ] = "keyJ";
      break;
    case "keyK":
      jsonml[ 0 ] = "keyK";
      break;
    case "keyL":
      jsonml[ 0 ] = "keyL";
      break;
    case "keyM":
      jsonml[ 0 ] = "keyM";
      break;
    case "keyN":
      jsonml[ 0 ] = "keyN";
      break;
    case "keyO":
      jsonml[ 0 ] = "keyO";
      break;
    case "keyP":
      jsonml[ 0 ] = "keyP";
      break;
    case "keyQ":
      jsonml[ 0 ] = "keyQ";
      break;
    case "keyR":
      jsonml[ 0 ] = "keyR";
      break;
    case "keyS":
      jsonml[ 0 ] = "keyS";
      break;
    case "keyT":
      jsonml[ 0 ] = "keyT";
      break;
    case "ans_error":
      jsonml[ 0 ] = "ans_error";
      break;
    case "key_error":
      jsonml[ 0 ] = "key_error";
      break;
    case "answer":
      jsonml[ 0 ] = "answer";
      break;
    case "analysis":
      jsonml[ 0 ] = "analysis";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
        //如果是img
        if(jsonml[i].indexOf("<img")>-1){
            var img = $("<div/>").html(jsonml[i]);
            // jsonml[i] = img;
        }
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( typeof exports === "undefined" ) {
    window.markdown = {};
    return window.markdown;
  }
  else {
    return exports;
  }
} )() );
