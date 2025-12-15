const backToTopBtn = document.getElementById('backToTop');
    const navPhone = document.getElementById('navPhone');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
        navPhone.style.opacity = '0';
        navPhone.style.visibility = 'hidden';
      } else {
        backToTopBtn.classList.remove('show');
        navPhone.style.opacity = '1';
        navPhone.style.visibility = 'visible';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Auto-close mobile nav on link click
    document.querySelectorAll('#navMenuDropdown a').forEach(link => {
      link.addEventListener('click', () => {
        const navToggle = document.querySelector('[data-bs-toggle="collapse"]');
        const navCollapse = document.getElementById('navMenuDropdown');
        if (navCollapse.classList.contains('show')) {
          navToggle.click();
        }
      });
    });