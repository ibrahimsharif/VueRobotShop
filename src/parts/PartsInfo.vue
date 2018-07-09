<template>
    <div>
        <h1>
            {{RobotPartInfo.title}}
        </h1>
        <h1>
            {{RobotPartInfo.description}}
        </h1>
    </div>
</template>

<script>
import store from '../data/parts';

export default {

  name: 'PartsInfo',
  data() {
    return {

    };
  },

  computed: {
    RobotPartInfo() {
      const { partType, id } = this.$route.params;

      return store[partType].find(item => item.id === +id);
    },
  },
};
</script>

<style scoped>

</style>
