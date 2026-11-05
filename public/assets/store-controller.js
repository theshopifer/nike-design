/**
 * Nike Design — Interactive Storefront Controller
 * Manages Cart, Search, Mobile Stories, Scene Rail, Runway Lookbook,
 * Shoe Orbit 360, and Vercel edge deployment compatibility.
 */

(() => {
  'use strict';

  // --- CATALOG DATABASE ---
  const PRODUCTS = [
    {
      id: 'luka-5',
      title: 'Luka 5',
      price: 149.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/preview_images/078baadd4d4b41249d0d43d65e133d3b.thumbnail.0000000000.jpg?v=1793376522&width=600',
      category: 'Shoes',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      description: 'Engineered for speed, multidirectional agility, and step-back precision.'
    },
    {
      id: 'air-jordan-12-retro',
      title: 'Air Jordan 12 Retro',
      price: 149.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/4.png?v=1792493527&width=600',
      category: 'Shoes',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      description: 'Iconic luxury basketball silhouette with full-length Zoom Air and premium leather.'
    },
    {
      id: 'tatum-5-orbit',
      title: 'Tatum 5 Orbit',
      price: 149.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/2.png?v=1792493528&width=600',
      category: 'Shoes',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      description: 'Lightweight performance basketball shoe built for explosive verticality.'
    },
    {
      id: 'blazzer',
      title: 'Blazzer Streetwear',
      price: 199.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007151524838.webp?v=1792066085&width=600',
      category: 'Streetwear',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Structured oversized streetwear tailoring in technical heavy wool blend.'
    },
    {
      id: 'hoodie',
      title: 'Nike Heavyweight Fleece Hoodie',
      price: 199.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007151440380.webp?v=1792066085&width=600',
      category: 'Streetwear',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Premium 480gsm brushed fleece with dropped shoulders and double-layered hood.'
    },
    {
      id: 'hoodie-black',
      title: 'Nike Essential Hoodie Black',
      price: 199.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007110147277.webp?v=1792066085&width=600',
      category: 'Streetwear',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Minimalist pitch-black streetwear hoodie designed for cold-weather layering.'
    },
    {
      id: 'sweatshirt',
      title: 'Nike Atelier Crew Sweatshirt',
      price: 199.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007151731811.webp?v=1792066085&width=600',
      category: 'Streetwear',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Relaxed fit architectural crewneck sweatshirt with ribbed hems.'
    },
    {
      id: 'sweatshirt-plus',
      title: 'Nike Technical Sweatshirt Plus',
      price: 199.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007151704914.webp?v=1792066085&width=600',
      category: 'Streetwear',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Heavyweight loopback fleece engineered for warmth and mobility.'
    },
    {
      id: 'tshirt',
      title: 'Nike Heavy Cotton Tee',
      price: 99.00,
      image: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007151654902.webp?v=1792066085&width=600',
      category: 'Streetwear',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Dense 250gsm combed organic cotton with relaxed boxy drape.'
    }
  ];

  // --- CART STATE ---
  const CART_KEY = 'nike_cart_v1';
  function getCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  function addToCart(product, size = 'M', quantity = 1) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: size,
        quantity: quantity
      });
    }
    saveCart(cart);
    showToast(`Added ${product.title} (${size}) to cart!`);
    openCartDrawer();
  }

  function updateQuantity(id, size, delta) {
    let cart = getCart();
    const idx = cart.findIndex(item => item.id === id && item.size === size);
    if (idx > -1) {
      cart[idx].quantity += delta;
      if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
      }
      saveCart(cart);
    }
  }

  function removeFromCart(id, size) {
    let cart = getCart();
    cart = cart.filter(item => !(item.id === id && item.size === size));
    saveCart(cart);
  }

  // --- TOAST NOTIFICATION ---
  function showToast(message) {
    let container = document.getElementById('nike-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'nike-toast-container';
      container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 999999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: #111111;
      color: #ffffff;
      padding: 14px 20px;
      border-radius: 8px;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: auto;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid rgba(255,255,255,0.1);
    `;

    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- CART UI UPDATE ---
  function updateCartUI() {
    const cart = getCart();
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Update header badge
    const bubble = document.querySelector('[ref="cartBubble"]');
    const bubbleText = document.getElementById('cart-bubble-text');
    const bubbleCount = document.querySelector('[ref="cartBubbleCount"]');
    if (bubble && bubbleCount) {
      if (totalCount > 0) {
        bubble.classList.remove('visually-hidden');
        bubbleCount.classList.remove('hidden');
        bubbleCount.textContent = totalCount;
      } else {
        bubble.classList.add('visually-hidden');
        bubbleCount.classList.add('hidden');
        bubbleCount.textContent = '0';
      }
    }

    // Update Cart Drawer DOM
    renderCartDrawer(cart, totalCount, subtotal);
  }

  function renderCartDrawer(cart, totalCount, subtotal) {
    const cartDrawer = document.getElementById('cart-drawer');
    if (!cartDrawer) return;

    let itemsContainer = cartDrawer.querySelector('.cart-drawer__items');
    if (!itemsContainer) {
      itemsContainer = cartDrawer.querySelector('.cart-drawer__content');
    }
    if (!itemsContainer) return;

    const freeShippingThreshold = 150.00;
    const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
    const amountNeeded = (freeShippingThreshold - subtotal).toFixed(2);

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-items__wrapper cart-items__wrapper--drawer-empty" style="padding: 40px 24px; text-align: center;">
          <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #111;">Your cart is empty</h2>
          <p style="color: #666; font-size: 15px; margin-bottom: 24px;">When you add items to your cart, they will appear here.</p>
          <button type="button" class="nike-continue-shopping-btn" style="
            background: #111;
            color: #fff;
            padding: 14px 28px;
            border-radius: 30px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: opacity 0.2s;
          ">Continue shopping</button>
        </div>
      `;
      const contBtn = itemsContainer.querySelector('.nike-continue-shopping-btn');
      if (contBtn) contBtn.addEventListener('click', closeCartDrawer);
      return;
    }

    let itemsHtml = `
      <div style="padding: 16px 20px; border-bottom: 1px solid #eee;">
        <div style="font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #111;">
          ${subtotal >= freeShippingThreshold 
            ? '🎉 Free Shipping Unlocked!' 
            : `Add $${amountNeeded} more to unlock Free Standard Shipping!`}
        </div>
        <div style="height: 6px; background: #e5e5e5; border-radius: 3px; overflow: hidden;">
          <div style="height: 100%; width: ${progressPercent}%; background: #111; transition: width 0.3s ease;"></div>
        </div>
      </div>
      <div style="max-height: calc(100vh - 280px); overflow-y: auto; padding: 10px 20px;">
    `;

    cart.forEach(item => {
      itemsHtml += `
        <div class="nike-cart-item-row" style="display: flex; gap: 16px; padding: 16px 0; border-bottom: 1px solid #f1f1f1;">
          <img src="${item.image}" alt="${item.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px; background: #f8f8f8;" />
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-weight: 600; font-size: 15px; color: #111; line-height: 1.3;">${item.title}</div>
              <div style="font-size: 13px; color: #666; margin-top: 4px;">Size: <span style="font-weight: 600; color: #111;">${item.size}</span></div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
              <div style="display: inline-flex; align-items: center; border: 1px solid #ddd; border-radius: 20px; padding: 2px 8px;">
                <button type="button" class="qty-btn" data-id="${item.id}" data-size="${item.size}" data-delta="-1" style="background:none; border:none; padding:4px 8px; font-size:16px; cursor:pointer; font-weight:bold;">−</button>
                <span style="font-size: 13px; font-weight: 600; min-width: 20px; text-align: center;">${item.quantity}</span>
                <button type="button" class="qty-btn" data-id="${item.id}" data-size="${item.size}" data-delta="1" style="background:none; border:none; padding:4px 8px; font-size:16px; cursor:pointer; font-weight:bold;">+</button>
              </div>
              <div style="font-weight: 700; font-size: 15px; color: #111;">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
          <button type="button" class="remove-btn" data-id="${item.id}" data-size="${item.size}" style="background:none; border:none; cursor:pointer; color:#999; padding:4px; align-self:flex-start;" title="Remove">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
          </button>
        </div>
      `;
    });

    itemsHtml += `
      </div>
      <div style="padding: 20px; border-top: 1px solid #eee; background: #fff;">
        <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 700; margin-bottom: 6px; color: #111;">
          <span>Subtotal</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div style="font-size: 12px; color: #777; margin-bottom: 16px;">Taxes and shipping calculated at checkout</div>
        <button type="button" id="nike-checkout-btn" style="
          width: 100%;
          background: #111;
          color: #fff;
          padding: 16px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        ">Checkout</button>
      </div>
    `;

    itemsContainer.innerHTML = itemsHtml;

    // Attach row events
    itemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const size = btn.getAttribute('data-size');
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        updateQuantity(id, size, delta);
      });
    });

    itemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const size = btn.getAttribute('data-size');
        removeFromCart(id, size);
      });
    });

    const checkoutBtn = document.getElementById('nike-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', openCheckoutModal);
    }
  }

  // --- CART DRAWER OPEN / CLOSE ---
  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (!drawer) return;
    const dialog = drawer.querySelector('dialog') || drawer;
    if (dialog && typeof dialog.showModal === 'function') {
      try {
        if (!dialog.open) dialog.showModal();
      } catch (e) {
        dialog.setAttribute('open', '');
      }
    } else {
      drawer.setAttribute('open', '');
    }
    drawer.classList.add('theme-drawer--open');
    if (dialog) dialog.classList.add('theme-drawer__dialog--open');
    document.body.style.overflow = 'hidden';
    updateCartUI();
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (!drawer) return;
    const dialog = drawer.querySelector('dialog') || drawer;
    if (dialog && typeof dialog.close === 'function') {
      try {
        dialog.close();
      } catch (e) {
        dialog.removeAttribute('open');
      }
    } else {
      drawer.removeAttribute('open');
    }
    drawer.classList.remove('theme-drawer--open');
    if (dialog) dialog.classList.remove('theme-drawer__dialog--open');
    document.body.style.overflow = '';
  }

  // --- CHECKOUT SIMULATION MODAL ---
  function openCheckoutModal() {
    const cart = getCart();
    if (cart.length === 0) return;
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal >= 150 ? 0 : 15.00;
    const total = subtotal + shipping;

    let modal = document.getElementById('nike-checkout-modal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'nike-checkout-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.65);
      backdrop-filter: blur(4px);
      z-index: 1000000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;

    modal.innerHTML = `
      <div style="
        background: #fff;
        width: 100%;
        max-width: 500px;
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        font-family: inherit;
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
      ">
        <button type="button" id="close-checkout-modal" style="
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f3f3f3;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">✕</button>

        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
          <svg height="22" viewBox="0 0 24 24" fill="#111"><path d="M21.707 5.293a1 1 0 0 0-1.414 0L9 16.586l-4.293-4.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l12-12a1 1 0 0 0 0-1.414z"/></svg>
          <h2 style="font-size: 22px; font-weight: 800; color: #111; margin: 0;">Nike Checkout</h2>
        </div>

        <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: #111;">Order Summary (${cart.length} items)</div>
          ${cart.map(i => `
            <div style="display: flex; justify-content: space-between; font-size: 13px; color: #444; margin-bottom: 4px;">
              <span>${i.title} (x${i.quantity}) - ${i.size}</span>
              <span style="font-weight: 600;">$${(i.price * i.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
          <div style="border-top: 1px solid #e0e0e0; margin-top: 10px; padding-top: 10px; display: flex; justify-content: space-between; font-weight: 800; font-size: 16px; color: #111;">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
          </div>
        </div>

        <form id="checkout-form" onsubmit="return false;">
          <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 12px; font-weight: 700; margin-bottom: 4px; color: #333;">Email Address</label>
            <input type="email" required placeholder="your.name@example.com" value="theshopifer@gmail.com" style="width: 100%; padding: 10px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;" />
          </div>
          <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 12px; font-weight: 700; margin-bottom: 4px; color: #333;">Shipping Address</label>
            <input type="text" required placeholder="123 Nike Way, Suite 100" value="One Bowerman Drive, Beaverton, OR 97005" style="width: 100%; padding: 10px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;" />
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 12px; font-weight: 700; margin-bottom: 4px; color: #333;">Payment Method</label>
            <div style="display: flex; gap: 8px;">
              <button type="button" class="pay-option selected" style="flex: 1; padding: 10px; border: 2px solid #111; border-radius: 6px; background: #fff; font-weight: 600; cursor: pointer;">Credit Card</button>
              <button type="button" class="pay-option" style="flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 6px; background: #fff; font-weight: 600; cursor: pointer;">Apple Pay</button>
              <button type="button" class="pay-option" style="flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 6px; background: #fff; font-weight: 600; cursor: pointer;">PayPal</button>
            </div>
          </div>
          <button type="submit" id="place-order-btn" style="
            width: 100%;
            background: #111;
            color: #fff;
            padding: 16px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: opacity 0.2s;
          ">Place Order • $${total.toFixed(2)}</button>
        </form>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('close-checkout-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    document.getElementById('place-order-btn').addEventListener('click', () => {
      modal.innerHTML = `
        <div style="
          background: #fff;
          width: 100%;
          max-width: 440px;
          border-radius: 16px;
          padding: 40px 32px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          text-align: center;
        ">
          <div style="width: 64px; height: 64px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
          </div>
          <h2 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px;">Order Confirmed!</h2>
          <p style="color: #666; font-size: 15px; margin-bottom: 24px;">Thank you for your order. A receipt has been dispatched to <b>theshopifer@gmail.com</b>.</p>
          <button type="button" id="done-order-btn" style="
            background: #111;
            color: #fff;
            padding: 14px 32px;
            border-radius: 30px;
            font-weight: 700;
            border: none;
            cursor: pointer;
          ">Continue Shopping</button>
        </div>
      `;
      saveCart([]);
      closeCartDrawer();
      document.getElementById('done-order-btn').addEventListener('click', () => modal.remove());
    });
  }

  // --- SEARCH DIALOG & LIVE FILTER ---
  function initSearch() {
    const searchModal = document.getElementById('search-modal');
    if (!searchModal) return;

    const searchInput = document.getElementById('cmdk-input');
    const searchResults = document.querySelector('[ref="productsList"]') || document.querySelector('.predictive-search__results');

    // Click handlers to open search modal
    document.querySelectorAll('[on\\:click*="search-modal"], .search-pill-button, .search-action').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openSearchModal();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterSearchResults(query);
      });
    }
  }

  function openSearchModal() {
    const searchModal = document.getElementById('search-modal');
    if (!searchModal) return;
    const dialog = searchModal.querySelector('dialog') || searchModal;
    if (dialog && typeof dialog.showModal === 'function') {
      try {
        if (!dialog.open) dialog.showModal();
      } catch (e) {
        dialog.setAttribute('open', '');
      }
    } else {
      searchModal.setAttribute('open', '');
    }
    const input = document.getElementById('cmdk-input');
    if (input) setTimeout(() => input.focus(), 100);
  }

  function closeSearchModal() {
    const searchModal = document.getElementById('search-modal');
    if (!searchModal) return;
    const dialog = searchModal.querySelector('dialog') || searchModal;
    if (dialog && typeof dialog.close === 'function') {
      try {
        dialog.close();
      } catch (e) {
        dialog.removeAttribute('open');
      }
    } else {
      searchModal.removeAttribute('open');
    }
  }

  function filterSearchResults(query) {
    const list = document.querySelector('[data-testid="products-list-default--modal"]') || document.querySelector('.predictive-search__products');
    if (!list) return;

    const filtered = PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      list.innerHTML = `<li style="padding: 24px; text-align: center; color: #777;">No products matching "${query}"</li>`;
      return;
    }

    list.innerHTML = filtered.map(p => `
      <li class="predictive-search__list-item" style="padding: 10px 0; border-bottom: 1px solid #f1f1f1;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 14px;">
            <img src="${p.image}" alt="${p.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; background: #f5f5f5;" />
            <div>
              <div style="font-weight: 600; font-size: 14px; color: #111;">${p.title}</div>
              <div style="font-size: 13px; color: #666;">$${p.price.toFixed(2)}</div>
            </div>
          </div>
          <button type="button" class="quick-add-from-search" data-product-id="${p.id}" style="
            background: #111;
            color: #fff;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            border: none;
            cursor: pointer;
          ">Add to Cart</button>
        </div>
      </li>
    `).join('');

    list.querySelectorAll('.quick-add-from-search').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          addToCart(prod, prod.sizes[0], 1);
          closeSearchModal();
        }
      });
    });
  }

  // --- MOBILE STORIES INTERACTION ---
  function initMobileStories() {
    const storiesContainer = document.querySelector('mobile-shop-stories') || document.querySelector('.mobile-shop-stories');
    if (!storiesContainer) return;

    // Enhance stories cards: clicking on any story opens full-screen story player
    const storyItems = storiesContainer.querySelectorAll('[data-story-index], .mobile-shop-stories__card, [role="button"]');
    storyItems.forEach((card, idx) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        openStoryModal(idx % 4);
      });
    });
  }

  const STORIES_DATA = [
    {
      title: 'Luka 5',
      price: '$149.00',
      badge: 'New Arrivals',
      videoUrl: 'https://nike-makknzjs.myshopify.com/cdn/shop/videos/c/vp/078baadd4d4b41249d0d43d65e133d3b/078baadd4d4b41249d0d43d65e133d3b.HD-1080p-2.5Mbps-99476759.mp4?v=0',
      poster: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/preview_images/078baadd4d4b41249d0d43d65e133d3b.thumbnail.0000000000.jpg?v=1793376522&width=900',
      product: PRODUCTS[0]
    },
    {
      title: 'Air Jordan 12 Retro',
      price: '$149.00',
      badge: 'Iconic Drop',
      videoUrl: 'https://nike-makknzjs.myshopify.com/cdn/shop/videos/c/vp/9d44131c3a6844dfa5100dbd7847c0d4/9d44131c3a6844dfa5100dbd7847c0d4.HD-1080p-2.5Mbps-99476758.mp4?v=0',
      poster: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/preview_images/9d44131c3a6844dfa5100dbd7847c0d4.thumbnail.0000000000.jpg?v=1793376523&width=900',
      product: PRODUCTS[1]
    },
    {
      title: 'Tatum 5 Orbit',
      price: '$149.00',
      badge: 'Performance',
      videoUrl: 'https://nike-makknzjs.myshopify.com/cdn/shop/videos/c/vp/078baadd4d4b41249d0d43d65e133d3b/078baadd4d4b41249d0d43d65e133d3b.HD-1080p-2.5Mbps-99476759.mp4?v=0',
      poster: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/2.png?v=1792493528&width=900',
      product: PRODUCTS[2]
    },
    {
      title: 'Heavyweight Fleece',
      price: '$199.00',
      badge: 'Streetwear',
      videoUrl: 'https://nike-makknzjs.myshopify.com/cdn/shop/videos/c/vp/9d44131c3a6844dfa5100dbd7847c0d4/9d44131c3a6844dfa5100dbd7847c0d4.HD-1080p-2.5Mbps-99476758.mp4?v=0',
      poster: 'https://nike-makknzjs.myshopify.com/cdn/shop/files/261007151440380.webp?v=1792066085&width=900',
      product: PRODUCTS[4]
    }
  ];

  let currentStoryIndex = 0;
  let storyTimer = null;

  function openStoryModal(index = 0) {
    currentStoryIndex = index;
    let modal = document.getElementById('nike-story-fullscreen-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'nike-story-fullscreen-modal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        z-index: 9999999;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      document.body.appendChild(modal);
    }
    renderStorySlide(modal);
  }

  function renderStorySlide(modal) {
    const story = STORIES_DATA[currentStoryIndex];
    if (!story) return;

    modal.innerHTML = `
      <div style="position: relative; width: 100%; max-width: 440px; height: 100%; max-height: 900px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; border-radius: 12px; background: #111;">
        <!-- Top Progress Bars -->
        <div style="position: absolute; top: 12px; left: 16px; right: 16px; z-index: 10; display: flex; gap: 4px;">
          ${STORIES_DATA.map((_, i) => `
            <div style="flex: 1; height: 3px; background: rgba(255,255,255,0.3); border-radius: 2px; overflow: hidden;">
              <div class="story-progress-bar-${i}" style="height: 100%; width: ${i < currentStoryIndex ? '100%' : (i === currentStoryIndex ? '0%' : '0%')}; background: #fff; transition: width 0.1s linear;"></div>
            </div>
          `).join('')}
        </div>

        <!-- Header Info -->
        <div style="position: absolute; top: 26px; left: 16px; right: 16px; z-index: 10; display: flex; justify-content: space-between; align-items: center; color: #fff;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 34px; height: 34px; border-radius: 50%; border: 2px solid #fff; overflow: hidden; background: #000;">
              <img src="${story.poster}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div>
              <div style="font-weight: 700; font-size: 14px;">${story.title}</div>
              <div style="font-size: 11px; opacity: 0.8;">${story.badge}</div>
            </div>
          </div>
          <button type="button" id="close-story-btn" style="background: rgba(0,0,0,0.4); border: none; color: #fff; width: 32px; height: 32px; border-radius: 50%; font-size: 16px; cursor: pointer;">✕</button>
        </div>

        <!-- Video Player or Image -->
        <video id="story-video-el" playsinline autoplay muted loop src="${story.videoUrl}" poster="${story.poster}" style="width: 100%; height: 100%; object-fit: cover;"></video>

        <!-- Tap navigation overlays -->
        <div id="story-prev-tap" style="position: absolute; top: 70px; bottom: 120px; left: 0; width: 35%; z-index: 5;"></div>
        <div id="story-next-tap" style="position: absolute; top: 70px; bottom: 120px; right: 0; width: 35%; z-index: 5;"></div>

        <!-- Bottom Product Pill -->
        <div style="position: absolute; bottom: 24px; left: 16px; right: 16px; z-index: 10; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); padding: 12px 16px; border-radius: 14px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${story.product.image}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px; background: #eee;" />
            <div>
              <div style="font-weight: 700; font-size: 14px; color: #111;">${story.product.title}</div>
              <div style="font-weight: 600; font-size: 13px; color: #555;">$${story.product.price.toFixed(2)}</div>
            </div>
          </div>
          <button type="button" id="story-buy-btn" style="
            background: #111;
            color: #fff;
            padding: 10px 18px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 13px;
            border: none;
            cursor: pointer;
          ">Add to Cart</button>
        </div>
      </div>
    `;

    document.getElementById('close-story-btn').addEventListener('click', closeStoryModal);
    document.getElementById('story-prev-tap').addEventListener('click', () => {
      if (currentStoryIndex > 0) {
        currentStoryIndex--;
        renderStorySlide(modal);
      }
    });
    document.getElementById('story-next-tap').addEventListener('click', () => {
      if (currentStoryIndex < STORIES_DATA.length - 1) {
        currentStoryIndex++;
        renderStorySlide(modal);
      } else {
        closeStoryModal();
      }
    });

    document.getElementById('story-buy-btn').addEventListener('click', () => {
      addToCart(story.product, story.product.sizes[0], 1);
      closeStoryModal();
    });

    // Auto progress
    clearInterval(storyTimer);
    let progress = 0;
    const activeProgressBar = modal.querySelector(`.story-progress-bar-${currentStoryIndex}`);
    storyTimer = setInterval(() => {
      progress += 2;
      if (activeProgressBar) activeProgressBar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(storyTimer);
        if (currentStoryIndex < STORIES_DATA.length - 1) {
          currentStoryIndex++;
          renderStorySlide(modal);
        } else {
          closeStoryModal();
        }
      }
    }, 100);
  }

  function closeStoryModal() {
    clearInterval(storyTimer);
    const modal = document.getElementById('nike-story-fullscreen-modal');
    if (modal) modal.remove();
  }

  // --- CONNECT ALL ON-PAGE BUY BUTTONS ---
  function connectProductButtons() {
    // 1. Connect all forms that submit to /cart/add
    document.querySelectorAll('form[action*="/cart/add"]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const titleEl = form.closest('.product-card, .scene-rail, .rack-showcase, [data-sr-section]')?.querySelector('[data-product-title], h2, h3, .title');
        const title = titleEl ? titleEl.textContent.trim() : 'Nike Streetwear';
        const matched = PRODUCTS.find(p => p.title.toLowerCase().includes(title.toLowerCase())) || PRODUCTS[4];
        addToCart(matched, 'M', 1);
      });
    });

    // 2. Connect any button containing "Add to cart"
    document.querySelectorAll('button, a').forEach(btn => {
      const text = btn.textContent.toLowerCase().trim();
      if (text === 'add to cart' || text.includes('add to cart')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Find context title or price
          const container = btn.closest('.product-card, .sr-modal, .sr-preview, .runway-section, [data-sr-section], dialog') || btn.parentElement;
          const textContent = container ? container.textContent : '';
          
          let selectedProduct = PRODUCTS.find(p => textContent.toLowerCase().includes(p.title.toLowerCase()));
          if (!selectedProduct) selectedProduct = PRODUCTS[4]; // Default to Fleece Hoodie
          
          // Check if size is selected
          const activeSizeEl = container?.querySelector('.sr-size.is-active, [aria-selected="true"], input[name="Size"]:checked');
          const size = activeSizeEl ? activeSizeEl.textContent.trim() : selectedProduct.sizes[0];

          addToCart(selectedProduct, size, 1);
        });
      }
    });

    // 3. Connect Cart Drawer trigger
    document.querySelectorAll('[data-testid="cart-drawer-trigger"], [on\\:click*="cart-drawer"], .header-actions__cart-icon').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    // 4. Connect Cart Drawer close buttons
    document.querySelectorAll('[on\\:click*="cart-drawer/close"], .cart-drawer__close-button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeCartDrawer();
      });
    });
  }

  // --- INTERCEPT FETCH REQUESTS ---
  function setupFetchInterceptors() {
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
      const url = args[0] ? args[0].toString() : '';

      // Intercept /cart/add.js
      if (url.includes('/cart/add')) {
        const cart = getCart();
        return new Response(JSON.stringify({
          status: 'ok',
          items: cart,
          item_count: cart.reduce((a, b) => a + b.quantity, 0)
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }

      // Intercept /cart.js
      if (url.includes('/cart.js') || url.endsWith('/cart')) {
        const cart = getCart();
        return new Response(JSON.stringify({
          items: cart,
          item_count: cart.reduce((a, b) => a + b.quantity, 0),
          total_price: cart.reduce((a, b) => a + (b.price * b.quantity * 100), 0)
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }

      // Intercept /search/suggest
      if (url.includes('/search/suggest') || url.includes('/search')) {
        return new Response(JSON.stringify({
          resources: {
            results: {
              products: PRODUCTS
            }
          }
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }

      return originalFetch.apply(this, args);
    };
  }

  // --- INITIALIZE ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    setupFetchInterceptors();
    updateCartUI();
    initSearch();
    initMobileStories();
    connectProductButtons();

    // Also watch for dynamically rendered elements
    const observer = new MutationObserver(() => {
      connectProductButtons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });

  // Global handle for debugging
  window.NikeStore = {
    addToCart,
    openCartDrawer,
    closeCartDrawer,
    getCart,
    PRODUCTS
  };

})();
