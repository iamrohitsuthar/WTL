import javax.servlet.http.*;  
import javax.servlet.*;  
import java.io.*; 
import java.sql.*;  
public class DemoServlet extends HttpServlet{

	public void doPost(HttpServletRequest req,HttpServletResponse res)  
	throws ServletException,IOException  
	{  
		res.setContentType("text/html");
		PrintWriter pw = res.getWriter();
		
		String loginid = req.getParameter("loginid");
		String pwd = req.getParameter("password");  

		try {  
			Class.forName("com.mysql.jdbc.Driver");  
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/wtl","root","root");  
			PreparedStatement pst = null;
			String sql = "SELECT id FROM users where username=? and pwd=?";
			pst = con.prepareStatement(sql);
			pst.setString(1,loginid);
			pst.setString(2,pwd);
			ResultSet rs = pst.executeQuery();
			

			int i = 0;
			while(rs.next()) {
			    i++;
			}

			if(i != 0) {
				//success
				// pw.println("Login Successful");
				req.setAttribute("message", "1");

			}
			else {
				// pw.println("Login Failed"); 
				req.setAttribute("message", "0");
			}
			con.close();  
		}
		catch(Exception e) { 
			// Syste,.out.println(e.getMessage());
		}  
		RequestDispatcher view = req.getRequestDispatcher("./index.jsp");
		view.forward(req, res);
	}
}