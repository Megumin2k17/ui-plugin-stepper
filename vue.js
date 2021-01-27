// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      nextBtnStatement: ['Вперед', 'Закончить'],
      btnsSwapped: false
    }
  },
  methods: {
    next() {

      if(this.activeIndex < this.steps.length-1) {
       
        this.activeIndex++
      } else {
        this.btnsSwapped = true
      }
         
    },
    prev() {

      if(this.activeIndex > 0) {

        this.activeIndex--
      }      
      
      // когда нажимаем кнопку назад
    },
    reset() {

       this.activeIndex = 0
       this.btnsSwapped = false

      // начать заново
    },
    nextOfFinish() {
      
      if(this.isLastStep) {
        this.$refs.nextBtn.innerHTML = this.nextBtnStatement[1]
        
      } else if(!this.isLastStep && !(this.$refs.nextBtn.innerHTML === this.nextBtnStatement[0])) {
        this.$refs.nextBtn.innerHTML = this.nextBtnStatement[0]
      }   
      // кнопка вперед или закончить
    },
    setActive(idx) {

      if(!this.isBtnsSwapped) {
        
        this.activeIndex = idx
      }
      
      // когда нажимаем на определенный шаг
    }
  },
  computed: {
    currentStep() {
      return this.activeIndex
    },
    isBackBtnDisabled() {
      return this.activeIndex === 0
    },
    isLastStep() {
      return this.activeIndex === this.steps.length-1
    },
    isBtnsSwapped() {
      return this.btnsSwapped
    }

    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  },
  beforeUpdate() {
    if(this.$refs.nextBtn) {
      this.nextOfFinish()
    }    
  }
}

Vue.createApp(App).mount('#app')