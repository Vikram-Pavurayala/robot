 setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 5000); // You can adjust the delay as needed

        function toggleMobileMenu() {
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        }
        
