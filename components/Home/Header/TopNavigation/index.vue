<template>
  <div class="flex justify-between pt-2 pb-2 top-nav">
    <div class="">
      <ul
        class="flex justify-start uppercase text-xs text-neutral-200 pt-2"
      >
        <li>
          <a href="#" data-toggle="modal" data-target="#langModal" class="text-center"
            >Switch Language</a
          >
        </li>
        <li><a href="/company/about" class="text-center">About</a></li>
        <li><a href="/company/contact" class="text-center">Contact</a></li>
      </ul>
    </div>
    <div class="flex justify-end capitalize text-xs text-neutral-200">
      <a
        href="https://fxrevenues.com/personalarea/signin"
        class="border btn rounded-md px-3 btn-login py-1 mr-2"
        >Login <i class="fas fa-sign-in-alt ml-1"></i
      ></a>
      <a
        href="https://fxrevenues.com/signup"
        class="border btn rounded-md px-3 py-1 btn-sign-up btn-red"
        >Create Account</a
      >
    </div>
  </div>
</template>

<style scoped>
.top-nav {
  border-bottom: 3px solid #f1f1f1;
}

ul li::before {
  content: "";
  height: 1.5em;
  margin-left: 0;
  margin-right: 20px;
  border-left: 1px solid #e5e5e5;
}

ul {
  margin-left: -20px;
}

ul li {
  margin-left: 20px;
}

a {
  color: #b5b5b5;
  transition: .1s ease-in-out;
  transition-property: color,background-color;
}

ul li a:hover,
ul li a:focus {
  color: #bb8b62;
  
}

a:hover {
  opacity: 0.7;
}

ul li:first-child::before {
  content: "";
  height: 1.5em;
  margin-left: 0;
  margin-right: 0;
  border-left: none;
}

.btn-login {
  color: #bb8b62;
  border-color: #bb8b62;
}

.btn-red {
  background-color: #f41112;
  border-color: #f41112;
  color: #fff;
}
</style>
