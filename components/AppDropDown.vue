<template>
    <section class="v-app-drop-down"
    >
      <div  class="v-app-drop-down__header"
            @click="isOpen = !isOpen"
      >
        <h3 class="v-app-drop-down__header__title"

        >{{title}}</h3>
        <div class="v-app-drop-down__header__icon">
          <template v-if="isOpen">-</template>
          <template v-else>+</template>
        </div>
      </div>

      <div class="v-app-drop-down__content"
           v-if="isOpen"
      >
        <template v-for="item in parsedDropDown" :key="item.id">
          <template v-if="item.type === 'content_text'">
            <div v-html="item.content.content_text_content" />
          </template>

          <template v-else-if="item.type === 'content_table'">
            <div class="v-app-drop-down__table">
              <div v-for="row of item.content.rows"
                   class="v-app-drop-down__table__collecion"
              >
                <div class="v-app-drop-down__table__collecion__header"
                >
                  <h3 class="v-app-drop-down__table__collecion__header__title" >{{row.content_table_title}}</h3>
                </div>
                <div v-for="rowContentCell of JSON.parse(row.content_table_content)"
                     class="v-app-drop-down__table__collecion__cell"
                     v-html="rowContentCell.content.content_table_content_text_content"
                />
              </div>
            </div>
          </template>

        </template>
      </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    title: string,
    dropdown_content: string,
}>()

const isOpen = ref(false)

const parsedDropDown: ComputedRef<
    (
        {
            content: {
                content_text_content: string
            }
            id: string
            isHidden: boolean
            type: "content_text"
        }
        |
        {
            "content": {
                "rows": {
                    "content_table_title": string,
                    "content_table_content": string,
                }[]
            },
            "id": string,
            "isHidden": boolean,
            "type": "content_table"
        }
    )[]> = computed(() => JSON.parse(props.dropdown_content))



</script>





<style lang="scss" scoped >
.v-app-drop-down__header {
  position: relative;
  user-select: none;
  cursor: pointer;
}

.v-app-drop-down__header__title {
  text-align: left;
  color: white;
  background: var(--app-color-main);
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-weight: 600;
  margin-top: 0;
}

.v-app-drop-down__header__icon {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translate(0, -50%);
  color: white;
  font-size: 3rem;
  line-height: 2ex;
  font-weight: 400;
}

.v-app-drop-down__content {
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
}

:global(.v-app-drop-down p) {
  max-width: none;
}

.v-app-drop-down__table {
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  gap: 1rem;
}

.v-app-drop-down__table__collecion {
  width: 30rem;
  flex-grow: 0;
  flex-shrink: 0;
}

.v-app-drop-down__table__collecion__header__title {
  text-align: left;
}

.v-app-drop-down__table__collecion__cell {
  background: white;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 2rem;

  & + & {
    margin-top: 1rem;
  }
}

:global(.v-app-drop-down__table__collecion__cell > *:first-child) {
  margin-top: 0;
}
:global(.v-app-drop-down__table__collecion__cell > *:last-child) {
  margin-bottom: 0;
}

:global(.v-app-drop-down__table__collecion__cell > *) {
  font-weight: 600;
}

</style>
