<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <router-link to="/" class="nav-link">Comments List</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/comments/create" class="nav-link">Create new comment</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="py-4">
        <div class="container">
            <router-view></router-view>
        </div>
    </main>
  </div>
</template>