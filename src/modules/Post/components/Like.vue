<template>
  <div class="flex-start align-center">
    <div class="likeicon">
      <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2884 2.61166C19.7777 2.10072 19.1714 1.6954 18.504 1.41887C17.8367 1.14233 17.1214 1 16.399 1C15.6766 1 14.9613 1.14233 14.294 1.41887C13.6266 1.6954 13.0203 2.10072 12.5096 2.61166L11.4497 3.67156L10.3899 2.61166C9.35835 1.58008 7.95929 1.00053 6.50047 1.00053C5.04166 1.00053 3.64259 1.58008 2.61105 2.61166C1.57951 3.64325 1 5.04239 1 6.50127C1 7.96016 1.57951 9.3593 2.61105 10.3909L3.67089 11.4508L11.4497 19.23L19.2286 11.4508L20.2884 10.3909C20.7993 9.88018 21.2046 9.27381 21.4812 8.60642C21.7577 7.93903 21.9 7.22369 21.9 6.50127C21.9 5.77886 21.7577 5.06352 21.4812 4.39613C21.2046 3.72874 20.7993 3.12237 20.2884 2.61166V2.61166Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="likecount">4</div>
  </div>
</template>
<style scoped>
  .likeicon {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .likeicon:hover {
    background-color: rgb(248, 248, 248);
  }
  svg:hover path {
    stroke:#444;
  }
  .likecount {
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
</style>
