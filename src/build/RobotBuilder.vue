     <template>
         <div>
             <div class="content">
                 <button @click="AddRobotToCart" class="add-robot">Add to cart
                     {{AddRobotToCart.cost}}</button>
             </div>
        <div class="top-row">
            <div class="top part">
                <div class="robot-name">
                    {{SelectedRobot.head.title}}
                    <span class="OnSale" v-show="SelectedRobot.head.onSale">sale!</span>
                </div>
                <img :src="SelectedRobot.head.src"
                     title="head"/>
                <button v-on:click="SelectPreviousHead"
                        class="prev-selector">&#9668;</button>
                <button v-on:click="SelectNextHead()"
                        class="next-selector">&#9658;</button>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
                <img :src="SelectedRobot.LeftArm.src" title="left arm"/>
                <button @click="SelectPreviousleftArm()"
                        class="prev-selector">&#9650;</button>
e                <button @click="SelectNextleftArm()"
                        class="next-selector">&#9660;</button>
            </div>
            <div class="center part">
                <img v-bind:src="availableParts.torsos[selectedToursIndex].src"
                     title="left arm"/>
                <button v-on:click="SelectPreviousTortous()"
                        class="prev-selector">&#9668;</button>
                <button  v-on:click="SelectNexttortos()"
                         class="next-selector">&#9658;</button>
            </div>
            <div class="right part">
                <img :src="SelectedRobot.arm.src" title="left arm"/>
                <button @click="SelectPreviousRightArm()"
                        class="prev-selector">&#9650;</button>
                <button @click="SelectNextRightArm"
                        class="next-selector">&#9660;</button>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
                <img :src="SelectedRobot.base.src" title="left arm"/>
                <button @click="SelectPreviousBase"
                        class="prev-selector">&#9668;</button>
                <button @click="SelectNextBase"
                        class="next-selector">&#9658;</button>
            </div>
        </div>
  <div>
    <h1>Cart</h1>
        <table>
            <thead>
            <tr>
                <th>Robot</th>
                <th class="cost">Cost</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(robot,index)in cart" :key="index">
                <td>{{robot.head.title}}</td>
                <td class="cost">{{robot.cost}}</td>
            </tr>
            </tbody>
        </table>
    </div>

         </div>
</template>

<script>
import availableParts from '../data/parts';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedArmIndex: 0,
      selectedToursIndex: 0,
      selectedBaseIndex: 0,
      selectedLeftArmIndex: 0,
      cartCheckOutCost: 0,
    };
  },


  computed: {
    SelectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        LeftArm: availableParts.arms[this.selectedLeftArmIndex],
        arm: availableParts.arms[this.selectedArmIndex],
        tors: availableParts.torsos[this.selectedToursIndex],
        base: availableParts.bases[this.selectedBaseIndex],

      };
    },
    CartCheckOutPrice() {
      const robot = this.SelectedRobot;
      const totalRobotPrice = robot.head.cost +
                  robot.tors.cost +
                  robot.LeftArm.cost +
                  robot.arm.cost +
                  robot.base.cost;

      return totalRobotPrice;
    },

  },

  methods: {
    AddRobotToCart() {
      this.cart.push(Object.assign({ }, this.SelectedRobot, this.CartCheckOutPrice));
    },

    GetNextValidIndex(index, length) {
      const incrementedIndex = index + 1;

      return incrementedIndex > length - 1 ? 0 : incrementedIndex;
    },
    GetPreviousIndex(index, length) {
      const deprecatedIndex = index - 1;
      return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
    },
    SelectNextHead() {
      this.selectedHeadIndex =
          this.GetNextValidIndex(this.selectedHeadIndex, this.availableParts.heads.length);
    },
    SelectPreviousHead() {
      this.selectedHeadIndex = this.GetPreviousIndex(
        this.selectedHeadIndex,
        this.availableParts.heads.length,
      );
      console.log(`'SelectedPrevious head with id :'${this.selectedHeadIndex}`);
    },
    SelectNexttortos() {
      this.selectedToursIndex =
          this.GetNextValidIndex(this.selectedToursIndex, this.availableParts.torsos.length);
    },
    SelectPreviousTortous() {
      this.selectedToursIndex =
          this.GetPreviousIndex(this.selectedToursIndex, this.availableParts.torsos.length);
    },
    SelectNextRightArm() {
      this.selectedArmIndex =
              this.GetNextValidIndex(this.selectedArmIndex, this.availableParts.arms.length);
    },
    SelectPreviousRightArm() {
      this.selectedArmIndex =
            this.GetPreviousIndex(this.selectedArmIndex, this.availableParts.arms.length);
    },
    SelectNextleftArm() {
      this.selectedLeftArmIndex =
              this.GetNextValidIndex(this.selectedLeftArmIndex, this.availableParts.arms.length);
    },
    SelectPreviousleftArm() {
      this.selectedLeftArmIndex =
              this.GetPreviousIndex(this.selectedLeftArmIndex, this.availableParts.arms.length);
    },
    SelectNextBase() {
      this.selectedBaseIndex =
              this.GetNextValidIndex(this.selectedBaseIndex, this.availableParts.bases.length);
    },
    SelectPreviousBase() {
      this.selectedBaseIndex =
              this.GetPreviousIndex(this.selectedBaseIndex, this.availableParts.bases.length);
    },
  },

};
</script>

<style scoped>
    td,th {
        text-align: left;
        padding: 5px;
        padding-right: 20px;
    }
   /* .cost{
text-align: right;
    }*/
.content{
    position: relative;

}
.add-robot{
position: absolute;
    right: 30px;
    width: 220px;
    padding: 3px;
    font-size: 16px;

}

    .robot-name{
        position: absolute;
        top: -25px;
        text-align: center;
        width: 100%;
    }
    .part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;

  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
    .OnSale{
        color: red;

    }
</style>
