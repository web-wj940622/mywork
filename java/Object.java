package zero;

public class Object {
	private int Id;
	private String Name;
	private int Price;
	private int Count;
	private String Remark;

	Object(int Id, String Name, int Price, int Count, String Remark) {
		this.Id = Id;
		this.Name = Name;
		this.Price = Price;
		this.Count = Count;
		this.Remark = Remark;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		this.Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		this.Name = name;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int price) {
		this.Price = price;
	}

	public int getCount() {
		return Count;
	}

	public void setCount(int count) {
		this.Count = count;
	}

	public String getRemark() {
		return Remark;
	}

	public void setRemark(String remark) {
		this.Remark = remark;
	}
	
	
}
