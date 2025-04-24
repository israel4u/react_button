function Products() {
  const products = [
    {title: 'Banana', id: 1},
    {title: 'Sweat-Potato', id: 2},
    {title: 'Garri', id: 3},
    {title: 'Pine-Apple', id: 4},
    {title: 'Pawpaw', id: 5},
    {title: 'Orange', id: 6},
  ];

  const fruits = products.map(product => 
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{fruits}</ul>
  )
}

export default Products;