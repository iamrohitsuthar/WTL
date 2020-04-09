package com.rohitsuthar;

class Student {
	private int studentRollNo;
	private String studentName;
	private String studentBranch;
	public int getStudentRollNo() {
		return studentRollNo;
	}
	public void setStudentRollNo(int studentRollNo) {
		this.studentRollNo = studentRollNo;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentBranch() {
		return studentBranch;
	}
	public void setStudentBranch(String studentBranch) {
		this.studentBranch = studentBranch;
	}
	
	public void displayInfo() {
		System.out.println("RollNo: "+studentRollNo + " Name: " +studentName + " Branch: " +studentBranch);
	}
	
	
}
