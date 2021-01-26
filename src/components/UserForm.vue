<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Ваше имя</label>
      <input
        v-model="userForm.fullname"
        type="text"
        class="form-control"
        id="name"
        placeholder="Имя"
      />
    </div>

    <div class="form-group">
      <label for="address">Ваш адрес</label>
      <input
        v-model="userForm.address"
        type="text"
        class="form-control"
        id="address"
        placeholder="Адрес"
      />
    </div>

    <div class="form-group">
      <label for="phone">Ваш номер телефона</label>
      <input
        v-model="userForm.phone"
        type="text"
        class="form-control"
        id="phone"
        placeholder="Номер телефона"
      />
    </div>

    <div class="form-group">
      <label for="email">Ваш email</label>
      <input
        v-model="userForm.email"
        type="text"
        class="form-control"
        id="email"
        placeholder="Email"
      />
    </div>

    <button type="submit" class="btn btn-success">Купить</button>
  </form>
</template>

<script>
  export default {
    name: 'UserForm',
    data: () => ({
      userForm: {
        fullname: '',
        phone: '',
        address: '',
        email: ''
      }
    }),
    methods: {
      handleSubmit() {
        this.$emit('onFormSubmit', this.userForm)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
