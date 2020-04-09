<jsp:useBean id="obj" class="com.hello.User" />
<jsp:setProperty name="obj" property="*" />

Welcome, <jsp:getProperty name="obj" property="name" /><br/>
Your ID is <jsp:getProperty name="obj" property="id" />