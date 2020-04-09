package com.rohitsuthar;
import com.opensymphony.xwork2.ActionSupport; 

public class Cal extends ActionSupport {
private int num1;
private int num2;
private int sum;

public String calculate() {
	sum = num1 + num2;
	return SUCCESS;
}

public int getNum1() {
	return num1;
}

public int getNum2() {
	return num2;
}

public void setNum1(int num1) {
	this.num1 = num1;
}

public void setNum2(int num2) {
	this.num2 = num2;
}

public String execute(){
	return "success";
}

public void setSum(int sum) {
	this.sum = sum;
}

public int getSum() {
	return sum;
}

}
