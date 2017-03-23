package zero;

import java.sql.*;

public class example {
	/**
	 * 驱动类名称
	 */
	private static final String DRIVER_CLASS = "com.mysql.jdbc.Driver";

	/**
	 * 数据库连接字符串
	 */
	private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/db_name";

	/**
	 * 数据库用户名
	 */
	private static final String USER_NAME = "root";

	/**
	 * 数据库密码
	 */
	private static final String PASSWORD = "root";

	/**
	 * 数据库连接类
	 */
	private static Connection conn;

	/**
	 * 数据库操作类
	 */
	private static Statement stmt;

	private static PreparedStatement pst;

	private static ResultSet rs;

	private static final String DELETE_USERS = "DELETE FROM USERS";

	// 加载驱动
	static {
		try {
			Class.forName(DRIVER_CLASS);
		} catch (Exception e) {
			System.out.println("加载驱动错误");
			System.out.println(e.getMessage());
		}
	}

	// 取得连接
	private static Connection getConnection() {

		try {
			conn = DriverManager.getConnection(DATABASE_URL, USER_NAME, PASSWORD);
		} catch (Exception e) {
			System.out.println("取得连接错误");
			System.out.println(e.getMessage());
		}
		return conn;
	}

	/**
	 * 关闭链接
	 */
	public static void close() {
		try {
			if (pst != null) {
				pst.close();
				pst = null;
			}
			if (stmt != null) {
				stmt.close();
				stmt = null;
			}
			if (conn != null) {
				conn.close();
				conn = null;
			}
			if (rs != null) {
				rs.close();
				rs = null;
			}
		} catch (SQLException e) {
			System.out.println("连接关闭异常");
		}
	}

	/**
	 * 删除
	 */
	public static int deleteUsers() {

		try {

			pst = conn.prepareStatement(DELETE_USERS);
			return pst.executeUpdate();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			return 0;
		} finally {
			close();
		}
	}
}
