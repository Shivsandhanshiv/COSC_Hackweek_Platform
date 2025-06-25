const ctx = document.getElementById('expenseChart').getContext('2d');
const categories = [];
const amounts = [];

const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: categories,
    datasets: [{
      label: 'Expenses',
      data: amounts,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }]
  },
  options: {
    responsive: true
  }
});

document.getElementById('expense-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);
  
  if (category && amount > 0) {
    categories.push(category);
    amounts.push(amount);
    chart.update();
  }

  this.reset();
});
