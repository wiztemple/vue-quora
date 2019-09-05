<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Vue-quora</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
           <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
             Create Post
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ml-2">
            Feeds
          </a>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
    <div class="w-full max-w-lg m-auto">
      <div class="flex mb-4">
        <div class="w-1/1">
          <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5">
            <img class="w-full" src="@/assets/images/winter.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Chinyere Obi</span>
            </div>
          </div>
          <div class="max-w-lg rounded overflow-hidden shadow-lg mt-5">
            <img class="w-full" src="@/assets/images/winter.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">wiztemple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
		name: 'Post'
	}
</script>

