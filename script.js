document.getElementById('generateBtn').addEventListener('click', function() {
    generateTicket();
  });

  document.getElementById('cancelBtn').addEventListener('click', function() {
    cancelTicket();
  });

  function generateTicket() {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let km = parseInt(document.getElementById('km').value);
    let userAge = document.getElementById('userAge').value;

    let ticketPrice = 0.21 * km;
    let discount = 0;

    if (userAge === 'minor') {
      discount = 0.2;
    } else if (userAge === 'senior') {
      discount = 0.4;
    }

    let finalPrice = ticketPrice * (1 - discount);
    let ticketType = discount > 0 ? 'Scontato' : 'Standard';
    let carriageNumber = Math.floor(Math.random() * 12) + 1;
    let ticketCode = Math.floor(Math.random() * 80000) + 10000;

    document.getElementById('ticketName').innerText = name;
    document.getElementById('ticketLastName').innerText = lastName;
    document.getElementById('ticketKm').innerText = km;
    document.getElementById('ticketType').innerText = ticketType;
    document.getElementById('carriageNumber').innerText = carriageNumber;
    document.getElementById('ticketCode').innerText = ticketCode;
    document.getElementById('ticketCost').innerText = finalPrice.toFixed(2);
    document.getElementById('ticket').className = 'card mt-3 text-bg-dark d-block';
}
  function cancelTicket() {
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('km').value = '';
  }