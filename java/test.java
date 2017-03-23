package zero;

import java.sql.*;

public class test {
	/**
	 * connect to DB
	 * 
	 * @return
	 */
	private static Connection getConn() {
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/object";
		String username = "root";
		String password = "root";
		Connection conn = null;
		try {
			Class.forName(driver);
			conn = (Connection) DriverManager.getConnection(url, username, password);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	/**
	 * operation INSERT
	 * 
	 * @param object
	 * @return
	 */
	private static int insert(Object object) {
		Connection conn = getConn();
		int i = 0;
		String sql = "insert into goods(id,name,price,count,remark) values (?,?,?,?,?)";
		PreparedStatement pstmt = null;
		try {
			pstmt = (PreparedStatement) conn.prepareStatement(sql);
			pstmt.setInt(1, object.getId());
			pstmt.setString(2, object.getName());
			pstmt.setInt(3, object.getPrice());
			pstmt.setInt(4, object.getCount());
			pstmt.setString(5, object.getRemark());
			i = pstmt.executeUpdate();
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstmt != null) {
					pstmt.close();
				}
			} catch (SQLException se) {

			}
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException se) {
				se.printStackTrace();
			}
		}
		return i;
	}

	/**
	 * operation UPDATE
	 * 
	 * @param object
	 * @return
	 */
	private static int update(Object object) {
		Connection conn = getConn();
		int i = 0;
		String sql = "update goods set count='" + object.getCount() + "'WHERE name ='" + object.getName() + "'";
		PreparedStatement pstmt = null;
		try {
			pstmt = (PreparedStatement) conn.prepareStatement(sql);
			i = pstmt.executeUpdate();
			System.out.println("result" + i);
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstmt != null) {
					pstmt.close();
				}
			} catch (SQLException se) {

			}
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException se2) {
				se2.printStackTrace();
			}
		}
		return i;
	}

	/**
	 * operation SELECT
	 * 
	 * @return
	 */
	private static Integer getAll() {
		Connection conn = getConn();
		String sql = "select * from goods";
		PreparedStatement pstmt = null;
		try {
			pstmt = (PreparedStatement) conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			int col = rs.getMetaData().getColumnCount();
			System.out.println("============================");
			while (rs.next()) {
				for (int i = 1; i <= col; i++) {
					System.out.print(rs.getString(i) + "\t");
					if ((i == 2) && (rs.getString(i).length() < 8)) {
						System.out.println("\t");
					}
				}
				System.out.println("");
			}
			System.out.println("============================");
		} catch (SQLException se) {
			se.printStackTrace();
		} finally {
			try {
				if (pstmt != null) {
					pstmt.close();
				}
			} catch (SQLException se) {

			}
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException se2) {
				se2.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * operation DELETE
	 * 
	 * @param name
	 * @return
	 */
	private static int delete(String name) {
		Connection conn = getConn();
		int i = 0;
		String sql = "delete from goods where Name = '" + name + "'";
		PreparedStatement pstmt = null;
		try {
			pstmt = (PreparedStatement) conn.prepareStatement(sql);
			i = pstmt.executeUpdate();
			System.out.println("result:" + i);
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {

		}
		return i;
	}

	public static void main(String args[]) {
		test.getAll();
		test.insert(new Object(6, "battery", 4, 220, ""));
		test.getAll();
		test.update(new Object(3,"cookie",10,90,""));
		test.getAll();
		test.delete("water");
		test.getAll();
	}
}
