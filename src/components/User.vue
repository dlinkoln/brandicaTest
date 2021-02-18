<template>
  <div class="main">
    <header class="header">
      <div class="header__circular-portrait">
        <img :src="image" alt="" />
      </div>
      <div v-if="userData[0]" class="header__name">
        {{userData[0].name}}
      </div>
    </header>
    <div class="user">
      <div class="user__info">
        <img :src="image" class="user__img" />
        <div class="user__data">
          <p v-for="(user,i) in userData[0]" :key="i" class="">
            {{i}} : {{user}} <br>
          </p>
        </div>
      </div>
      <div class="user__ctr">
        <form @submit.prevent="checkForm">
          <div class="user__cred">
            <input type="name" placeholder="name" v-model="userFields.name" />
            <input
              placeholder="email"
              v-model="userFields.email"
            />
          </div>
          <div class="user__phone">
            <input
              type="phone"
              placeholder="phone"
              v-model="userFields.phone"
            />
          </div>
          <p class="user__errors-list" v-if="errors.length">
            <b>Some fields have errors:</b>
            <ul>
              <li v-for="(error,i) in errors" :key="errors[i]" class="user__error">{{ error }}</li>
            </ul>
          </p>
          <button type="submit" class="user__submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import defaultAvatar from "@/assets/avatar.png";
export default {
  data() {
    return {
      errors: [],
      userFields: {
        name: null,
        email: null,
        phone: null,
      },
      image: defaultAvatar,
    };
  },
  mounted() {
    this.$store.dispatch("SAVE_USER", {
      name: "John Doe",
      email: "some@example.com",
      phone: 123,
    });
  },
  methods: {
    checkForm() {
      if (this.userFields.name && this.userFields.email) {
        const copyUser = Object.assign({}, this.userFields);
        this.$store.dispatch("SAVE_USER", copyUser);
        this.errors = [];
        return true;
      }
      this.errors = [];
      if (!this.userFields.name) {
        this.errors.push("Field Name is required");
      }
      if (!this.userFields.email) {
        this.errors.push("Field Email is required");
      }
    },
  },
  computed: {
    userData() {
      return this.$store.getters.USER;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1c1c1c;
  margin-bottom: 10px;
  height: 55px;
  padding-left: 10px;
  padding-right: 10px;
}
.header__circular-portrait {
  position: relative;
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.user {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  width: 35%;
  * {
    margin-bottom: 10px;
    box-sizing: border-box;
    input {
      height: 35px;
      padding-left: 10px;
      border: 1px solid #1c1c1c;
      &::placeholder {
        text-align: center;
      }
    }
  }
  .user__info {
    display: flex;
    justify-content: space-between;
  }
  .user__data {
    display: block;
  }
  .user__cred {
    display: flex;
    justify-content: space-between;
    input {
      width: 180px;
    }
  }
  .user__phone {
    input {
      width: 100%;
    }
  }
  .user__submit {
    width: 100%;
    height: 55px;
    cursor: pointer;
  }
  .user__errors-list {
    li {
      padding-left: 10px;
      list-style-type: none;
      margin-top: 10px;
    }
  }
  .user__error {
    color: red;
    font-size: 11px;
  }
}
</style>
