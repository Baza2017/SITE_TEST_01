        // Массив для хранения товаров в корзине
        let cart = []; // Инициализация пустого массива для корзины

        // Функция для показа выбранной секции
        function showSection(sectionId) {
            // Получаем все секции
            const sections = document.querySelectorAll('section'); // Выбор всех элементов section
            sections.forEach(section => {
                section.style.display = 'none'; // Скрываем все секции
            });
            // Показываем выбранную секцию
            document.getElementById(sectionId).style.display = 'block'; // Устанавливаем display block для выбранной
        }

        // Функция для добавления товара в корзину
        function addToCart(name, price) {
            // Добавляем объект в массив корзины
            cart.push({ name, price }); // Пушим новый объект с именем и ценой
            // Обновляем отображение корзины
            updateCart(); // Вызываем функцию обновления корзины
        }

        // Функция для удаления товара из корзины
        function removeFromCart(index) {
            // Удаляем элемент по индексу
            cart.splice(index, 1); // Используем splice для удаления
            // Обновляем отображение корзины
            updateCart(); // Вызываем обновление
        }

        // Функция для обновления отображения корзины
        function updateCart() {
            const cartItems = document.getElementById('cart-items'); // Получаем элемент списка
            cartItems.innerHTML = ''; // Очищаем текущий контент
            let total = 0; // Инициализация общей суммы

            // Перебираем товары в корзине
            cart.forEach((item, index) => {
                const li = document.createElement('li'); // Создаем новый элемент li
                li.textContent = `${item.name} - ${item.price} руб.`; // Устанавливаем текст
                const removeButton = document.createElement('button'); // Создаем кнопку удаления
                removeButton.textContent = 'Удалить'; // Текст кнопки
                removeButton.onclick = () => removeFromCart(index); // Обработчик клика
                li.appendChild(removeButton); // Добавляем кнопку в li
                cartItems.appendChild(li); // Добавляем li в список
                total += item.price; // Прибавляем цену к сумме
            });

            // Обновляем итоговую сумму
            document.getElementById('total').textContent = `Итого: ${total} руб.`; // Устанавливаем текст итога
        }