<template>
  <div class=" flex flex-row-2 justify-between my-5 items-center">
    <div class="">
      <!-- header logo begin -->
      <div class="">
        <a class="" href="/"
          ><img
            src="https://d3at6kgh21uc9k.cloudfront.net/img/fxrevenues-logo.jpg"
            data-src="https://d3at6kgh21uc9k.cloudfront.net/img/fxrevenues-logo.jpg"
            width="200"
            alt="FxRevenues"
            data-uk-img=""
        /></a>
      </div>
      <!-- header logo end -->
    </div>
    <div class="h-max">
      <!-- main navigation begin -->
      <nav class="h-full flex content-center" data-uk-navbar="">
        <ul class="flex justify-end content-center h-full">
          <li><a href="/trading/markets" class="px-5 py-7">Markets</a></li>

          <li class="hover-dropdown relative">
            <a href="#" class="px-5 py-7 " aria-expanded="false"
              >Accounts <i class="fas fa-chevron-down"></i
            ></a>
            <div class="hidden dropdown-menu absolute ">
              <ul class="">
                <li><a href="/trading/accounts">Account Types</a></li>
                <li><a href="/trading/islamic-account">Islamic Account</a></li>
              </ul>
            </div>
          </li>

          <li class="hover-dropdown relative">
            <a href="#" class="px-5 py-7 " aria-expanded="false"
              >Platform <i class="fas fa-chevron-down"></i
            ></a>
            <div class="hidden dropdown-menu absolute">
              <ul class="">
                <li><a href="/platform/fxrtrader">FxRevenues Trader </a></li>
                <li><a href="/platform/trading-apps">Trading Apps</a></li>
                <li>
                  <a href="https://fxrevenues.com/platform/webtrader"
                    >WebTrader</a
                  >
                </li>
                <li><a href="/platform/trading-hours">Trading Hours</a></li>
                <li><a href="/platform/assets-expiries">Assets Expiries</a></li>
              </ul>
            </div>
          </li>
          <li class="hover-dropdown relative">
            <a href="#" class="px-5 py-7 " aria-expanded="false"
              >Company <i class="fas fa-chevron-down"></i
            ></a>
            <div class="hidden dropdown-menu absolute">
              <ul class="">
                <li><a href="/company/about">About</a></li>
                <li><a href="/company/questions">FAQ</a></li>
                <li><a href="/company/legal-docs">Legal Docs</a></li>
                <li><a href="/company/contact">Contact</a></li>
              </ul>
            </div>
          </li>

          <li class="hover-dropdown relative">
            <a href="#" class="px-5 py-7 " aria-expanded="false" 
              >Research <i class="fas fa-chevron-down"></i
            ></a>
            <div class="hidden dropdown-menu absolute">
              <ul class="">
                <li>
                  <a href="/research/fibonacci-calculation"
                    >Fibonacci Calculation</a
                  >
                </li>
                <li>
                  <a href="/research/pivot-calculation">Pivot Calculation</a>
                </li>
                <li>
                  <a href="/research/economic-market-calendar"
                    >Economic Calendar</a
                  >
                </li>
                <li>
                  <a href="/research/currency-forecast">Currency Forecast</a>
                </li>
                <li><a href="/research/market-news">Market News</a></li>
                <li><a href="/research/glossary">Trading Glossary</a></li>
                <li><a href="/research/video-academy">Video Academy</a></li>
                <li><a href="/research/ebooks">E-book Collection</a></li>
                <li><a href="/research/market-watch">Market Watch</a></li>
                <li><a href="/research/financial-news">Financial News</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <!-- main navigation end -->
      <!-- mobile navigation begin -->
      <!-- <div
        class="in-mobile-nav uk-height-1-1 uk-flex uk-flex-right uk-flex-middle uk-hidden@m"
      >
        <a class="uk-button" href="#mobile-nav-modal" data-uk-toggle=""
          ><i class="fas fa-bars"></i
        ></a>
      </div>
      <div
        id="mobile-nav-modal"
        class="uk-modal-full uk-modal"
        data-uk-modal=""
      >
        <div
          class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
          data-uk-height-viewport=""
        >
          <button
            class="uk-modal-close-full uk-close-large fas fa-times"
            type="button"
          ></button>
          <div class="uk-width-large uk-padding-large">
            <ul
              class="uk-nav-primary uk-nav-parent-icon in-margin-negative-top@s uk-nav"
              data-uk-nav=""
            >
              <li><a href="/trading/markets">Markets</a></li>
              <li><a href="/trading/accounts">Account Types</a></li>
              <li><a href="/trading/islamic-account">Islamic Account</a></li>
              <li><a href="/platform/fxrtrader">Platform</a></li>
              <li class="uk-parent">
                <a href="#">Company</a>
                <ul class="uk-nav-sub" hidden="" aria-hidden="true">
                  <li><a href="/company/about">About</a></li>
                  <li><a href="/company/questions">FAQ</a></li>
                  <li><a href="/company/legal-docs">Legal Docs</a></li>
                  <li><a href="/company/contact">Contact</a></li>
                </ul>
              </li>
            </ul>
            <a
              href="https://fxrevenues.com/personalarea/signin"
              class="uk-button uk-button-primary uk-border-rounded uk-align-center"
              >Login <i class="fas fa-sign-in-alt uk-margin-small-left"></i
            ></a>
          </div>
        </div>
      </div> -->
      <!-- mobile navigation end -->
    </div>
  </div>
</template>

<style scoped >
ul li a:hover {
  color: #bb8b62;
}

ul li a:hover i {
transform: rotatez(-180deg);
}

ul li.hover-dropdown:hover .dropdown-menu  {
  display: block;
}

a>i {
  font-size: 9.5px;
  transition: all 0.2s ease;
}

/* @keyframes yrotate{
  from {
transform: rotateY(0);
  }
  to {
transform: rotateY(180deg);
  }
} */

</style>