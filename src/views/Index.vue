<template>
  <div class="index">
    <v-btn class="mx-2 settings" fab dark color="#8A2BE2" v-on:click="settingsShow()">
      <v-icon>mdi-settings</v-icon>
    </v-btn>

    <v-alert type="warning" class="settings-alert" v-if="settings">No settings...</v-alert>

    <v-content class="content">
      <v-card class="mx-auto inline-block" max-width="344" v-for="project in projects" :key="project.id">
        <v-card-text>
          <div>Created by <span style="font-style: italic;">{{ project.creator }}</span></div>
          <v-card-title class="title font-weight-medium" style="color: purple;">{{ project.name }}</v-card-title>
          <p>{{ project.lastEdit.getDate() }}/{{ project.lastEdit.getMonth() }}/{{ project.lastEdit.getFullYear() }}</p>
          <div class="text--primary">
            {{ project.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" style="width: 100%;" v-on:click="go(project.link)">GO</v-btn>
        </v-card-actions>
      </v-card>

    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Index',
  data () {
    return {
      settings: false,
      projects: {}
    }
  },
  methods: {
    settingsShow () {
      this.settings = true
      setTimeout(() => {
        this.settings = false
      }, 5000)
    },
    go (link) {
      window.location.href = link
    }
  },
  created () {
    this.projects.pps = {
      id: 1,
      name: 'Pierre-Papier-Ciseaux',
      creator: 'Sourciluss',
      lastEdit: new Date(),
      description: 'Un jeu de Pierre Papier Ciseaux...',
      link: 'https://pps.sourciluss.fr'
    }
  }
}
</script>

<style scoped>
.settings {
  position: absolute;
  top: 10px;
  right: 10px;
}

.settings-alert {
  position: absolute;
  bottom: 0%;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
}

.content {
display: block;
position: absolute;
width: 100%;
height: 90%;
bottom: 0;
}
</style>
