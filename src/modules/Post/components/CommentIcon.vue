<template>
  <div class="flex-start">
    <div class="commenticon">
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H5L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
    </div>
    <div class="commentcount">67</div>
  </div>
</template>
<style scoped>
  .commenticon {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .commenticon:hover {
    background-color: rgb(248, 248, 248);
  }
  svg:hover path {
    stroke:#444;
  }
  .commentcount {
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
</style>
