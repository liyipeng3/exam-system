package com.neusoft.root;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamSystemApplication {

	
	public static void main(String[] args) {
		
		//sqlInit();

		SpringApplication.run(ExamSystemApplication.class, args);
		
	}
	
	
	public static void sqlInit()
	{
		Connection conn;
		PreparedStatement stmt;
		String driver = "com.mysql.cj.jdbc.Driver";
		String url = "jdbc:mysql://localhost/exam?useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC";
		String user = "root";
		String password = "123";
		String sql = "insert into admin_table values (?,?,?)";
		
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url, user, password);
			stmt = (PreparedStatement) conn.prepareStatement(sql);
			stmt.setString(1,"1");
			stmt.setString(2, "init admin");
			stmt.setString(3, "123456");
			
			stmt.executeUpdate();
			
		} catch (ClassNotFoundException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}

}
