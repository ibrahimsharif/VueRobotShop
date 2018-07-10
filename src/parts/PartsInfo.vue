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
  props: {
    partType: {
      type: String,
    },
    id: {
      type: [String, Number],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  name: 'PartsInfo',
  data() {
    return {

    };
  },

  computed: {
    RobotPartInfo() {
      const { partType, id } = this;

      return store[partType].find(item => item.id === +id);
    },
  },
};
</script>

<style scoped>

</style>
