import mitt from 'mitt';
type Events = {
    foo: string;
    bar?: number;
  };
const $bus = mitt<Events>();
 export default $bus