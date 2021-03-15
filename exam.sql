/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3306
 Source Schema         : exam

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 15/03/2021 22:00:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table`  (
  `admin_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('admin', 'admin', '202cb962ac59075b964b07152d234b70');

-- ----------------------------
-- Table structure for check_table
-- ----------------------------
DROP TABLE IF EXISTS `check_table`;
CREATE TABLE `check_table`  (
  `student_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paper_id` int(4) NOT NULL,
  `teacher_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `singlechoice_score` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `multichoice_score` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fill_score` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subjective_score` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sum_score` double NULL DEFAULT NULL,
  `check_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of check_table
-- ----------------------------
INSERT INTO `check_table` VALUES ('admin', 23, 'admin', '17,.00###15,.00###', '18,.00###', '20,2.51###', '19,6.28###', 8.8, '2019-08-02 07:29');
INSERT INTO `check_table` VALUES ('student', 23, 'admin', '17,.00###15,.00###', '', '', '', 0, '2019-08-02 07:35');
INSERT INTO `check_table` VALUES ('admin', 23, 'admin', '17,.00###15,.00###', '18,.00###', '20,3.22###', '19,8.04###', 11.26, '2021-03-15 21:42');
INSERT INTO `check_table` VALUES ('admin', 23, 'admin', '17,.00###15,.00###', '18,.00###', '20,3.37###', '19,8.43###', 11.8, '2021-03-15 21:43');

-- ----------------------------
-- Table structure for class_table
-- ----------------------------
DROP TABLE IF EXISTS `class_table`;
CREATE TABLE `class_table`  (
  `class_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `class_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `class_seats` int(4) NOT NULL,
  PRIMARY KEY (`class_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of class_table
-- ----------------------------

-- ----------------------------
-- Table structure for course_table
-- ----------------------------
DROP TABLE IF EXISTS `course_table`;
CREATE TABLE `course_table`  (
  `course_id` int(4) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `course_type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `course_begin` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `course_end` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `course_remark` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `course_status` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`course_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course_table
-- ----------------------------
INSERT INTO `course_table` VALUES (1, '离散数学', '计算机', '2019-08-01 00:00', '2019-08-31 00:00', '计算机必修课', '1');
INSERT INTO `course_table` VALUES (2, '2019语文', '语文', '2019-08-02 00:00', '2019-08-31 00:00', '大学语文', '1');
INSERT INTO `course_table` VALUES (3, '2019数学', '数学', '2019-08-06 00:00', '2019-08-24 00:00', '小学数学', '1');
INSERT INTO `course_table` VALUES (4, '2019英语', '英语', '2019-08-12 00:00', '2019-08-14 00:00', '大学英语', '1');

-- ----------------------------
-- Table structure for exam_table
-- ----------------------------
DROP TABLE IF EXISTS `exam_table`;
CREATE TABLE `exam_table`  (
  `exam_id` int(4) NOT NULL AUTO_INCREMENT,
  `paper_id` int(4) NOT NULL,
  `creater_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `exam_name` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `exam_type` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pass_score` double NOT NULL,
  `sum_score` double NOT NULL,
  `create_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `exam_begin` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `exam_end` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `exam_last` double NOT NULL,
  `exam_remark` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`exam_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of exam_table
-- ----------------------------
INSERT INTO `exam_table` VALUES (6, 23, 'admin', '34234', '计算机', 5, 25, '2019-08-02 01:23', '2019-08-02 01:23', '2019-08-05 01:23', 60, '');
INSERT INTO `exam_table` VALUES (7, 24, 'admin', '34234', '计算机', 5, 50, '2019-08-02 01:25', '2019-08-02 01:24', '2019-08-05 01:24', 60, '');
INSERT INTO `exam_table` VALUES (8, 25, 'admin', '34234', '计算机', 5, 18, '2019-08-02 01:26', '2019-08-02 01:26', '2019-08-05 01:26', 60, '');

-- ----------------------------
-- Table structure for forum_table
-- ----------------------------
DROP TABLE IF EXISTS `forum_table`;
CREATE TABLE `forum_table`  (
  `post_id` int(4) NOT NULL AUTO_INCREMENT,
  `post_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sender_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `post_tag` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `post_outline` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `post_context` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`post_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of forum_table
-- ----------------------------

-- ----------------------------
-- Table structure for item_table
-- ----------------------------
DROP TABLE IF EXISTS `item_table`;
CREATE TABLE `item_table`  (
  `item_id` int(4) NOT NULL AUTO_INCREMENT,
  `creater_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_coursetype` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `item_index` double NOT NULL,
  `item_question` varchar(7000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_option` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_answer` varchar(7000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_picture` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_score` double NOT NULL,
  `item_parse` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`item_id`) USING BTREE,
  INDEX `creater_id`(`creater_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item_table
-- ----------------------------
INSERT INTO `item_table` VALUES (11, 'admin', '2019-08-02 00:25', '计算机', '单选题', 1, '离散数学难吗？', '不简单###难###好难###很难', '难', '', 5, '真难');
INSERT INTO `item_table` VALUES (12, 'admin', '2019-08-02 00:51', '语文', '单选题', 3, '不在金圣叹所称赞的“六才子书”之列的是:______', '《庄子》###《红楼梦》###《水浒传》###《史记》', '《红楼梦》', '', 5, '没有解析，自己百度');
INSERT INTO `item_table` VALUES (13, 'admin', '2019-08-02 00:51', '计算机', '单选题', 1, '1+1=?', '1###2###3###4', '2', '', 5, '233');
INSERT INTO `item_table` VALUES (14, 'admin', '2019-08-02 00:52', '语文', '单选题', 5, '“东坡妇”的典故出自苏东坡的_________', '《前赤壁赋》###《水调歌头》###《赤壁怀古》###《后赤壁赋》', '《后赤壁赋》', '', 5, '没有解析，自己百度');
INSERT INTO `item_table` VALUES (15, 'admin', '2019-08-02 00:53', '英语', '单选题', 1, 'How are you?', 'ok###fine###good###nine', 'fine', '', 5, 'ohhh');
INSERT INTO `item_table` VALUES (16, 'admin', '2019-08-02 00:54', '语文', '单选题', 5, '文章有移情换性之功用，传说曹操正是读了______的檄文治愈了头疼病。', '嵇康###陈琳###杨修###王粲', '陈琳', '', 5, '没有解析，自己百度');
INSERT INTO `item_table` VALUES (17, 'admin', '2019-08-02 00:54', '英语', '单选题', 1, 'How old are you?', 'twelve###eleven###ten###nine', 'nine', '', 5, 'ohhhhhhh');
INSERT INTO `item_table` VALUES (18, 'admin', '2019-08-02 00:57', '英语', '多选题', 5, 'Do you lke van youxi?', 'yes###yesyes###yesyesyes###yesyesyes', 'yes###yesyes###yesyesyes###yesyesyes', '', 6, 'yeahsyeahs');
INSERT INTO `item_table` VALUES (19, 'admin', '2019-08-02 01:00', '英语', '问答题', 5, 'ABC songs', '', 'abcdefghijklmn', '', 10, 'opqrstuvwxyz');
INSERT INTO `item_table` VALUES (20, 'admin', '2019-08-02 01:04', '英语', '填空题', 1, 'g___ l___h___ f__', '', 'goule huifang', '', 7, 'good luckhave fun');
INSERT INTO `item_table` VALUES (21, 'admin', '2019-08-02 01:05', '语文', '多选题', 5, '下列属判断句子是（   ）。', '陈胜者，阳城人也。###鹿禽###百乘，显使也。###（楚怀王）内惑于郑袖，外欺于张仪。', '陈胜者，阳城人也。###百乘，显使也。', '', 6, '别问为啥，自己百度');
INSERT INTO `item_table` VALUES (22, 'admin', '2019-08-02 01:06', '语文', '多选题', 5, '倡导了古文运动的作家有（）', '韩愈###曾巩###欧阳修###柳宗元', '韩愈###柳宗元', '', 6, '别问为啥，自己百度');
INSERT INTO `item_table` VALUES (23, 'admin', '2019-08-02 01:08', '语文', '多选题', 5, '韩愈的作品有（）', '《醉翁亭记》###《捕蛇者说》###《师说》###《祭十二郎文》', '《捕蛇者说》###《师说》###《祭十二郎文》', '', 6, '别问为啥，自己百度');
INSERT INTO `item_table` VALUES (24, 'admin', '2019-08-02 01:09', '语文', '填空题', 5, '柳宗元的作品有《阿旁宫赋》吗？', '', '没有', '', 7, '没有就是没有，选上有也没用');
INSERT INTO `item_table` VALUES (25, 'admin', '2019-08-02 01:13', '数学', '问答题', 1, '修路队修一条2850米的公路，前3天，每天修150米，剩下的需要12天完成，平均每天修路多少米？', '', '解：（2850﹣150×3）÷12=2400÷12=200（米）答：平均每天修路200米．', '', 10, '首先根据工作量=工作效率×工作时间，用前3天每天修的公路的长度乘以3，求出前3天一共修了多少米；然后用这条公路的长度减去已经修的长度，求出还剩下多少米没有修；最后用剩下的公路的长度除以5，求出平均每天修多少米即可．');
INSERT INTO `item_table` VALUES (26, 'admin', '2019-08-02 01:14', '语文', '问答题', 5, '以 “自己太帅该怎么办” 为题写一篇1000字作文', '', '。。。。。。', '', 10, '莫得解析');
INSERT INTO `item_table` VALUES (27, 'admin', '2019-08-02 01:14', '数学', '问答题', 1, '张强家养的猪，7天吃饲料105千克．照这样计算，五月份他家的猪一共要吃饲料多少千克？', '', '解：105÷7×31=15×31=465（千克）答：五月份他家的猪一共要吃饲料465千克．', '', 10, '根据\'7天吃饲料105千克\'，求出1天吃多少千克；再乘以5月份的31天，即为5月份一共要吃多少千克．');

-- ----------------------------
-- Table structure for log_table
-- ----------------------------
DROP TABLE IF EXISTS `log_table`;
CREATE TABLE `log_table`  (
  `log_id` int(4) NOT NULL AUTO_INCREMENT,
  `op_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `op_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `op_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `op_msg` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `op_page` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`log_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of log_table
-- ----------------------------
INSERT INTO `log_table` VALUES (48, 'admin', '2019-08-02 00:18', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (49, 'admin', '2019-08-02 00:48', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (50, 'admin', '2019-08-02 00:49', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (51, 'admin', '2019-08-02 00:55', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (52, 'admin', '2019-08-02 01:16', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (53, 'admin', '2019-08-02 07:27', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (54, 'admin', '2019-08-02 07:29', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (55, 'student', '2019-08-02 07:31', '登录', '学生', '/login');
INSERT INTO `log_table` VALUES (56, 'admin', '2019-08-02 08:23', '登录', '管理员', '/login');
INSERT INTO `log_table` VALUES (57, 'admin', '2021-03-15 21:40', '登录', '管理员', '/login');

-- ----------------------------
-- Table structure for message_table
-- ----------------------------
DROP TABLE IF EXISTS `message_table`;
CREATE TABLE `message_table`  (
  `msg_id` int(4) NOT NULL AUTO_INCREMENT,
  `msg_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sender_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `target_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `msg_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `msg_context` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `msg_role` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`msg_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message_table
-- ----------------------------

-- ----------------------------
-- Table structure for paper_table
-- ----------------------------
DROP TABLE IF EXISTS `paper_table`;
CREATE TABLE `paper_table`  (
  `paper_id` int(4) NOT NULL AUTO_INCREMENT,
  `paper_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `creater_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paper_type` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paper_index` double NOT NULL,
  `singlechoice_question` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `multichoice_question` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fill_question` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subjective_question` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `paper_score` double NOT NULL,
  `paper_secrecy` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `paper_remark` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`paper_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of paper_table
-- ----------------------------
INSERT INTO `paper_table` VALUES (23, '英语月考', 'admin', '2019-08-02 01:23', '计算机', 3, '15???3???单选题???1###17???3???单选题???1', '18???5???多选题???2', '20???4???填空题???3', '19???10???问答题???4', 25, '保密', '1564680228897');
INSERT INTO `paper_table` VALUES (24, '*****密*****2020高考语文试题', 'admin', '2019-08-02 01:24', '计算机', 3, '12???5???单选题???1###14???5???单选题???1###16???5???单选题???1', '21???5???多选题???2###22???5???多选题???2###23???5???多选题???2', '24???10???填空题???3', '26???10???问答题???4', 50, '保密', '1564680282827');
INSERT INTO `paper_table` VALUES (25, '英语周考', 'admin', '2019-08-02 01:26', '计算机', 3, '15???1???单选题???1###17???1???单选题???1', '18???2???多选题???2', '20???4???填空题???3', '19???10???问答题???4', 18, '保密', '1564680360065');
INSERT INTO `paper_table` VALUES (26, '考试', 'admin', '2019-08-02 01:27', '计算机', 3, '', '', '', '25???10???问答题???1###27???10???问答题???1', 20, '保密', '1564680449485');
INSERT INTO `paper_table` VALUES (27, '试卷名字', 'student', '2019-08-02 07:51', '计算机', 3, '16???5???单选题???1', '', '', '', 5, '保密', '1564703498839');
INSERT INTO `paper_table` VALUES (28, '试卷名字', 'student', '2019-08-02 07:52', '计算机', 3, '', '21???25???多选题???1', '', '', 25, '保密', '1564703531892');
INSERT INTO `paper_table` VALUES (29, '试卷名字', 'student', '2019-08-02 08:01', '计算机', 3, '14???25???单选题???1', '', '', '', 25, '保密', '1564704076580');
INSERT INTO `paper_table` VALUES (30, '试卷名字', 'student', '2019-08-02 08:03', '计算机', 3, '12???25???单选题???1', '', '', '', 25, '保密', '1564704180808');
INSERT INTO `paper_table` VALUES (31, '试卷名字', 'student', '2019-08-02 08:13', '计算机', 3, '16???25???单选题???1', '', '', '', 25, '保密', '1564704783896');
INSERT INTO `paper_table` VALUES (32, '试卷名字', 'student', '2019-08-02 08:21', '英语', 3, '17???25???单选题???1', '', '', '', 25, '保密', '1564705306644');

-- ----------------------------
-- Table structure for result_table
-- ----------------------------
DROP TABLE IF EXISTS `result_table`;
CREATE TABLE `result_table`  (
  `student_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `paper_id` int(4) NOT NULL,
  `teacher_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `singlechoice_result` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `multichoice_result` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fill_result` varchar(5000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subjective_result` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `submit_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `checked` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of result_table
-- ----------------------------
INSERT INTO `result_table` VALUES ('admin', 23, 'admin', '17???eleven###15???ok', '18???yes!!!yesyes', '20???hhh', '19???<p>abc</p>', '2019-08-02 07:29', 'yes');
INSERT INTO `result_table` VALUES ('student', 23, 'admin', '17???twelve###15???ok', '', '', '', '2019-08-02 07:35', 'yes');
INSERT INTO `result_table` VALUES ('admin', 23, 'admin', '17???ten###15???good', '18???yesyes', '20???235234', '19???<p>345345345</p>', '2021-03-15 21:42', 'yes');
INSERT INTO `result_table` VALUES ('admin', 23, 'admin', '', '', '20???235234', '', '2021-03-15 21:43', 'yes');

-- ----------------------------
-- Table structure for student_table
-- ----------------------------
DROP TABLE IF EXISTS `student_table`;
CREATE TABLE `student_table`  (
  `student_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `student_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `student_password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `student_academy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `student_major` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `student_school` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`student_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student_table
-- ----------------------------
INSERT INTO `student_table` VALUES ('student', 'student', '202cb962ac59075b964b07152d234b70', '计算机学院', '软件工程', '哈尔滨工业大学');

-- ----------------------------
-- Table structure for teacher_table
-- ----------------------------
DROP TABLE IF EXISTS `teacher_table`;
CREATE TABLE `teacher_table`  (
  `teacher_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacher_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacher_password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacher_academy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacher_major` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacher_school` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`teacher_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teacher_table
-- ----------------------------
INSERT INTO `teacher_table` VALUES ('teacher', 'teacher', '202cb962ac59075b964b07152d234b70', '人文学院', '社会学', '哈尔滨工业大学');

SET FOREIGN_KEY_CHECKS = 1;
