package zero;

import java.sql.*;

public class FirstExample {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/object";

	static final String USER = "root";
	static final String PASS = "root";

	public static void main(String[] args){
	Connection conn = null;
	Statement stmt = null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(DB_URL, USER, PASS);
			stmt = conn.createStatement();
			String sql;
			sql = "SELECT id, name, price, count, remark FROM goods WHERE id = 1";
			ResultSet rs = stmt.executeQuery(sql);
			
			while(rs.next()){
				int id = rs.getInt("id");
				int price = rs.getInt("price");
				int count = rs.getInt("count");
				String name = rs.getString("name");
				String remark = rs.getString("remark");

				System.out.print("ID: " + id);
				System.out.print(", Price: " + price);
				System.out.print(", Count: " + count);
				System.out.println(", Name: " + name);
				System.out.println(", Remark: " + remark);
			}
			
			rs.close();
			stmt.close();
			conn.close();
		}catch(SQLException se){
			se.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			try{
				if(stmt!=null)
					stmt.close();
			}catch(SQLException se2){
			}
			try{
				if(conn!=null)
					conn.close();
			}catch(SQLException se){
				se.printStackTrace();
			}
		}
	}
}










