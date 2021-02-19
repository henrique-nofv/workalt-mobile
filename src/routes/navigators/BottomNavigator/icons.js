import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Train(props) {
  return (
    <Svg width={30} height={20} viewBox="0 0 35 20" fill="none" {...props}>
      <Path
        d="M32.857 2.857H31.43C31.429 2 30.857 1.43 30 1.43h-1.428C28.572.57 28 0 27.142 0h-1.428c-.857 0-1.428.571-1.428 1.429V8.57H10V1.43C10 .57 9.429 0 8.571 0H7.143c-.857 0-1.429.571-1.429 1.429H4.286c-.857 0-1.429.571-1.429 1.428H1.43C.57 2.857 0 3.43 0 4.286v11.428c0 .857.571 1.429 1.429 1.429h1.428c0 .857.572 1.428 1.429 1.428h1.428c0 .858.572 1.429 1.429 1.429H8.57C9.43 20 10 19.429 10 18.571V11.43h14.286v7.142c0 .858.571 1.429 1.428 1.429h1.429c.857 0 1.428-.571 1.428-1.429H30c.857 0 1.429-.571 1.429-1.428h1.428c.857 0 1.429-.572 1.429-1.429V4.286c0-.857-.572-1.429-1.429-1.429zm-30 12.857H1.43V4.286h1.428v11.428zm2.857 1.429H4.286V2.857h1.428v14.286zm2.857 1.428H7.143V1.43H8.57V18.57zM27.143 2.857V18.571h-1.429V1.43h1.429v1.428zM30 4.286V17.143h-1.428V2.857H30v1.429zm2.857 11.428H31.43V4.286h1.428v11.428z"
        fill={props.active ? '#671786' : '#fff'}
      />
    </Svg>
  );
}

export function Home(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 22 20" fill="none" {...props}>
      <Path
        d="M20.723 9.836L11.241.22a.733.733 0 00-.802-.162.735.735 0 00-.238.162L.719 9.836a1.51 1.51 0 00-.433 1.059c0 .824.66 1.495 1.473 1.495h1v6.862c0 .414.328.748.736.748h5.753v-5.234h2.578V20h6.121a.741.741 0 00.737-.748V12.39h.999c.391 0 .767-.157 1.043-.44a1.513 1.513 0 00-.003-2.114z"
        fill={props.active ? '#671786' : '#fff'}
      />
    </Svg>
  );
}

export function Chat(props) {
  return (
    <Svg width={22} height={20} viewBox="0 0 21 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.503 13.867a1.25 1.25 0 01.359 1.002 13.71 13.71 0 01-.498 2.5c1.744-.404 2.809-.872 3.293-1.116a1.25 1.25 0 01.887-.093c.852.227 1.73.341 2.611.34 4.995 0 8.75-3.509 8.75-7.5 0-3.99-3.755-7.5-8.75-7.5S1.405 5.01 1.405 9c0 1.835.772 3.537 2.098 4.867zm-.616 4.882c-.297.059-.594.112-.892.161-.25.04-.44-.22-.341-.453.111-.261.213-.527.305-.796l.004-.012c.31-.9.562-1.935.655-2.899C1.084 13.213.155 11.2.155 9c0-4.832 4.478-8.75 10-8.75 5.523 0 10 3.918 10 8.75s-4.477 8.75-10 8.75c-.99.001-1.976-.127-2.933-.383-.65.33-2.05.928-4.335 1.382z"
        fill={props.active ? '#671786' : '#fff'}
      />
    </Svg>
  );
}

export default {Home, Chat, Train};
