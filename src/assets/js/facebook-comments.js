// Facebook Comments Module
export function initFacebookComments() {
    // Chỉ tải SDK khi cần thiết
    if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.appendChild(fbRoot);

        // Tải SDK Facebook
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
    }
}

// Hàm tạo container cho comments
export function createCommentsContainer() {
    const container = document.createElement('div');
    container.className = 'fb-comments-container';
    container.innerHTML = `
        <div class="fb-comments" 
             data-href="${window.location.href}" 
             data-width="100%" 
             data-numposts="5" 
             data-order-by="reverse_time">
        </div>
    `;
    return container;
}

// Hàm thêm styles
export function addFacebookStyles() {
    if (!document.getElementById('fb-comments-styles')) {
        const style = document.createElement('style');
        style.id = 'fb-comments-styles';
        style.textContent = `
            .fb-comments-container {
                background: #fff;
                padding: 20px;
                border-radius: var(--border-radius);
                margin: 20px auto;
                max-width: 1200px;
                box-shadow: var(--box-shadow);
            }
            
            .fb-comments {
                background: #fff;
                width: 100%;
            }
            
            .fb-comments iframe {
                width: 100% !important;
            }

            @media (max-width: 768px) {
                .fb-comments-container {
                    padding: 10px;
                    margin: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }
} 

/*  <script type="module">
    import { initFacebookComments, createCommentsContainer, addFacebookStyles } from '/src/assets/js/facebook-comments.js';

    // Khởi tạo Facebook Comments
    initFacebookComments();
    addFacebookStyles();

    // Thêm container vào wrapper
    const wrapper = document.getElementById('fb-comments-wrapper');
    wrapper.appendChild(createCommentsContainer());
  </script>  */