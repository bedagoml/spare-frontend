<template>
  <div class="wrapper">
      <side-bar v-if="!loggedIn">
          <template slot="links">
              <sidebar-link to="/login" name="Login" icon="ti-panel"/>
              <sidebar-link to="/register" name="Register" icon="ti-panel"/>
          </template>
      </side-bar>
    <side-bar v-if="loggedIn">
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/items" name="Items" icon="ti-home"/>
        <sidebar-link to="/users" name="Users" icon="ti-user"/>
        <!--<sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/>-->
        <!--<sidebar-link to="/typography" name="Typography" icon="ti-text"/>-->
        <!--<sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>-->
        <!--<sidebar-link to="/maps" name="Map" icon="ti-map"/>-->
        <!--<sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>-->
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  },
  computed: {
      loggedIn() {
          return this.$store.getters.loggedIn;
      }
  }
};
</script>
