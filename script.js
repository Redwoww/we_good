document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const resultMsg = document.getElementById('resultMsg');
    const container = document.querySelector('.container');

    // --- HAYIR Butonunun Hareketi ---
    noBtn.addEventListener('mouseover', () => {
        // Rastgele bir konum hesapla
        // Konumun container (beyaz kutu) içinde kalmasını sağlamak için boyutları kullanıyoruz.
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();
        
        // Rastgele X (yatay) konumu hesapla
        // Max X: (Kapsayıcı genişliği - Buton genişliği) - bir miktar margin
        const maxX = containerRect.width - buttonRect.width - 20; 
        const newX = Math.random() * maxX; 

        // Rastgele Y (dikey) konumu hesapla
        // Dikey hareket için sınırlı bir alan belirliyoruz
        const maxY = 200; // Örneğin, sadece 200px'lik dikey bir alanda hareket etsin
        const newY = Math.random() * maxY; 

        // Butonun pozisyonunu güncelle
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });
    
    // --- EVET Butonunun Tıklanma Olayı ---
    yesBtn.addEventListener('click', () => {
        // HAYIR butonunun hareketini durdur (mouseover olayını kaldırabiliriz, 
        // ancak sadece görünmez yapmak daha hızlıdır)
        noBtn.style.display = 'none';

        // EVET butonunu da görünmez yapabiliriz
        yesBtn.style.display = 'none';

        // "Barıştık, değil mi?" başlığını gizle
        document.querySelector('h1').style.display = 'none';
        
        // Sonuç mesajını göster
        resultMsg.textContent = "Teşekkürler, aşkım! 🥰";
        resultMsg.classList.remove('hidden');

        // Butonların kapsayıcısını da gizle (veya görünümü ayarla)
        document.querySelector('.buttons').style.height = '0';
        document.querySelector('.container').style.paddingBottom = '30px';
    });
});