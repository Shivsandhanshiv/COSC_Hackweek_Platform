from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, sessionmaker

Base = declarative_base()

class Category(Base):
    __tablename__ = 'category'
    category_id = Column(Integer, primary_key=True)
    category_name = Column(String, nullable=False)

    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = 'product'
    product_id = Column(Integer, primary_key=True)
    product_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    category_id = Column(Integer, ForeignKey('category.category_id'))

    category = relationship("Category", back_populates="products")


engine = create_engine('sqlite:///forge.db', echo=False)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

categories = [
    Category(category_name='Electronics'),
    Category(category_name='Books'),
    Category(category_name='Clothing')
]

products = [
    Product(product_name='Smartphone', price=699.99, category=categories[0]),
    Product(product_name='Laptop', price=1199.49, category=categories[0]),
    Product(product_name='Python Programming', price=39.99, category=categories[1]),
    Product(product_name='T-Shirt', price=19.99, category=categories[2]),
    Product(product_name='Jeans', price=49.99, category=categories[2])
]

session.add_all(categories + products)
session.commit()

all_products = session.query(Product).all()
print("\nProduct List:\n" + "-"*50)
for product in all_products:
    print(f"Product: {product.product_name}, Price: ${product.price:.2f}, Category: {product.category.category_name}")

session.close()
