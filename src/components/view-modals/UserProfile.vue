<template>
  <div class="user-profile">
    <div class="header">
      <div class="balances">
        <div class="balance" v-for="(balance, label) in balances">
          {{ label }}: {{ balance }}
        </div>
      </div>
      <button class="disconnect-button" @click="$emit('disconnect-wallet')">Disconnect</button>
    </div>
    <div class="main">
      <div class="left-panel">
        <div class="tabs">
          <div
              class="tab"
              v-for="(section, index) in sections"
              :key="index"
              :class="{ active: currentSection === index }"
              @click="setCurrentSection(index)"
          >
            <i :class="'fa fa-' + section.icon"></i>
            <span :title="section.label">{{ section.label }}</span>
          </div>
        </div>
        <div class="content">
          <template v-if="currentSection === 0">
            <div class="user-info">
              <img :src="user.profilePicture" class="profile-picture" />
              <button @click="chooseProfilePicture">Choose profile picture</button>
              <div class="identifier">
                {{ userIdentifier }}
              </div>
            </div>
          </template>
          <template v-if="currentSection === 1">
            <div class="history">
              <h3>History</h3>
              <div class="metrics">
                <div class="metric" v-for="(metric, label) in historyMetrics">
                  <h4>{{ label }}</h4>
                  <div class="value">{{ metric }}</div>
                </div>
              </div>
              <div class="period-selector">
                <button @click="setPeriod('today')">Today</button>
                <button @click="setPeriod('week')">Past week</button>
                <button @click="setPeriod('month')">Past month</button>
                <button @click="setPeriod('3 months')">Past 3 months</button>
                <button @click="setPeriod('forever')">Forever</button>
              </div>
              <div class="account-info">
                <h4>Account age</h4>
                <div class="value">{{ accountAge }}</div>
                <h4>Other info</h4>
                <div class="value">{{ otherInfo }}</div>
              </div>
            </div>
          </template>
          <template v-if="currentSection === 2">
            <div class="community-links">
              <h3>Your New Friends</h3>
              <div class="project" v-for="project in projects">
                <img :src="project.image" class="project-image" />
                <div class="info">
                  <div class="name">{{ project.name }}</div>

                  <div class="creator">{{ project.creator }}</div>
                  <div class="date">{{ project.date }}</div>
                  <a :href="project.link" class="view-link">View</a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        profilePicture: '',
        algoAddress: 'sldkjfsldkfjsldkfj',
      },
      balances: {
        $ALGO: 0,
        $FUN: 0,
        NFTs: 0,
      },
      sections: [
        {
          icon: 'user',
          label: 'User info',
        },
        {
          icon: 'history',
          label: 'History',
        },
        {
          icon: 'users',
          label: 'Community links',
        },
      ],
      currentSection: 0,
      historyMetrics: {
        NFTsSubmitted: 0,
        NFTsPulled: 0,
        Est$ALGOSubmitted: 0,
        Est$ALGOPulled: 0,
        $FUNRewarded: 0,
        $FUNRedeemed: 0,
        PlatformFeesPaid: 0,
        CreatorDonations: 0,
      },
      period: 'today',
      accountAge: '1d',
      otherInfo: '[other info example]',
      projects: [
        {
          image: 'https://nftstorage.link/ipfs/bafybeih6gl7yqbios3thgyg3ps5e53dv7u477d4oue2uwb5tdshyugogza/21.jpeg',
          name: 'Test Project',
          creator: 'nobody.algo',
          date: 'today',
          link: 'https://fungibl.fun',
        },
      ],
    };
  },
  computed: {
    userIdentifier() {
      return this.user.customName ? this.user.customName : this.user.algoAddress;
    },
  },
  methods: {
    chooseProfilePicture() {
      // code to choose a profile picture goes here
    },
    setCurrentSection(index) {
      this.currentSection = index;
    },
    setPeriod(period) {
      this.period = period;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.balances {
  display: flex;
}

.balance {
  margin-right: 20px;
}

.disconnect-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.main {
  display: flex;
  flex: 1;
}

.left-panel {
  width: 200px;
  border-right: 1px solid #ccc;
}

.tabs {
  display: flex;
  .tab {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    color: #333;
    &.active {
      color: #0076ff;
    }
    i {
      margin-right: 10px;
    }
    &:hover {
      background-color: #eee;
    }
  }
}

.content {
  padding: 20px;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.identifier {
  margin-left: 20px;
}

.history {
  h3 {
    margin-top: 0;
  }
  .metrics {
    display: flex;
    flex-wrap: wrap;
    .metric {
      width: 50%;
      h4 {
        margin: 0;
      }
      .value {
        font-weight: bold;
      }
    }
  }
  .period-selector {
    display: flex;
    button {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .account-info {
    h4 {
      margin: 10px 0 0;
    }
  }
}

.community-links {
  h3 {
    margin-top: 0;
  }
  .project {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .project-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .info {
      margin-left: 20px;
      .name {
        font-weight: bold;
      }
      .creator {
        color: #777;
      }
      .date {
        margin-top: 5px;
        color: #777;
      }
      .view-link {
        color: #0076ff;
        text-decoration: none;
        margin-top: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
