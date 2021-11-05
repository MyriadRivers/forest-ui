import { createRouter, createWebHistory } from 'vue-router'
import DanceEditor from '../views/DanceEditor.vue'
import DanceStepEditor from '../views/DanceStepEditor.vue'
import StageEditor from '../views/StageEditor.vue'

const routes = [
  {
    path: '/',
    name: 'DanceEditor',
    component: DanceEditor
  },
  {
    path: '/dance-step-editor',
    name: 'DanceStepEditor',
    component: DanceStepEditor
  },
  {
    path: '/stage-editor',
    name: 'StageEditor',
    component: StageEditor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
