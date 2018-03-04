// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters' // global filters
import 'babel-polyfill'
import {
  Dialog,
  Button,
  Pagination,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Radio,
  RadioGroup,
  RadioButton,
  Select,
  Table,
  DatePicker,
  TableColumn,
  Form,
  Upload,
  FormItem,
  Icon,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Input,
  Option,
  OptionGroup,
  InputNumber,
  Footer,
  Message,
  Checkbox,
  MessageBox
} from 'element-ui'
import '../element-variables.scss'
import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = {size: 'small'}
const components = [
  Dialog,
  Button,
  Upload,
  Pagination,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Radio,
  Checkbox,
  RadioGroup,
  RadioButton,
  Select,
  Table,
  TableColumn,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Input,
  Option,
  OptionGroup,
  InputNumber,
  Footer,
  Message,
  DatePicker,
  MessageBox
]
components.forEach((item) => {
  Vue.component(item.name, item)
})
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
const MsgBox = MessageBox
Vue.prototype.$msgbox = MsgBox
Vue.prototype.$alert = MsgBox.alert
Vue.prototype.$confirm = MsgBox.confirm
Vue.prototype.$prompt = MsgBox.prompt
Vue.prototype.$message = Message

locale.use(lang)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
