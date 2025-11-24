
    var time_poput = ""; /* Глобальная переменная для хранения ID открытой попап секции */

    function openPopup() {
      var popup = document.querySelector('.popup');
      popup.style.display = 'block';
    }

    /*function closePopup() {
      var popup = document.querySelector('.popup');
      popup.style.display = 'none';
    }   */
    

    function showPopop(popupId) {
      // Получаем все секции
      const popups = document.querySelectorAll('popup'); 
      popups.forEach(popup => {
          popup.style.display = 'none'; 
      });
      // Показываем выбранную секцию
      document.getElementById(popupId).style.display = 'block'; 
      time_poput = popupId;
  }

  function closePopup() {
    var popup = document.getElementById(time_poput);
    popup.style.display = 'none';
  }  

        let cart = []; 

       
        function addToCart(name, price) {

            cart.push({ name, price }); 
  
            updateCart(); 
          }

          function removeFromCart(index) {
                          
            cart.splice(index, 1); 

            updateCart(); 
        }
  

          function updateCart() {
              const cartItems = document.getElementById('TOCART'); 
              cartItems.innerHTML = ''; 
              let total = 0; 
  
              /*// Перебираем товары в корзине
              cart.forEach((item, index) => {
                  const li = document.createElement('li'); // Создаем новый элемент li
                  li.textContent = `${item.name} - ${item.price} руб.`; // Устанавливаем текст
                  const removeButton = document.createElement('button'); // Создаем кнопку удаления
                  removeButton.textContent = 'Удалить'; // Текст кнопки
                  removeButton.onclick = () => removeFromCart(index); // Обработчик клика
                  li.appendChild(removeButton); // Добавляем кнопку в li
                  cartItems.appendChild(li); // Добавляем li в список
                  
              }); */
              total += item.price; 
     
              document.getElementById('total').textContent = `Итого: ${total} руб.`;
          }

          document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const messageDisplay = document.getElementById('message');
            const CORRECT_USERNAME = 'test';
            const CORRECT_PASSWORD = '1234';
        
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
        
                const enteredUsername = usernameInput.value;
                const enteredPassword = passwordInput.value;
        
                
                if (enteredUsername === CORRECT_USERNAME && enteredPassword === CORRECT_PASSWORD) {
                    messageDisplay.textContent = `Авторизация успешна! Добро пожаловать, ${enteredUsername}!`;
                    messageDisplay.className = 'message success';
                    
                    
                } else {
                    messageDisplay.textContent = 'Неверный логин или пароль.';
                    messageDisplay.className = 'message error';
                }
        
                usernameInput.value = '';
                passwordInput.value = '';
            });
        });