import React from 'react';
import { Text, StatusBar } from 'react-native';

import AnimatedHeader from '../../components/AnimatedHeader';

import styles from './styles';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AnimatedHeader title="Titulo da Página">
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor
          quam, semper in sem ut, rhoncus pharetra diam. Duis id augue
          sollicitudin, bibendum ex et, viverra nisl. Phasellus bibendum finibus
          tortor. Quisque ac lacinia massa. Aenean maximus facilisis tincidunt.
          Fusce enim velit, luctus nec tincidunt sit amet, aliquet et nisl.
          Vivamus posuere eros convallis ultricies pretium. Proin laoreet
          porttitor nunc eget molestie. Nunc vel condimentum purus, id egestas
          nisi. Cras hendrerit sapien libero, ut commodo orci interdum quis.
          Donec pellentesque dapibus turpis. Phasellus ornare tincidunt turpis,
          quis aliquam erat accumsan nec. Praesent tempor eros at purus semper
          laoreet.{'\n\n'} Phasellus aliquet, magna non semper scelerisque, mi
          purus tristique tellus, ut ornare orci metus venenatis eros. Aenean
          blandit odio id tincidunt egestas. Integer venenatis varius sem, vel
          pulvinar est lacinia vel. Sed elit nulla, feugiat vel viverra eget,
          pharetra ut mauris. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Morbi sed pharetra metus. Nulla purus eros, mattis sit
          amet mauris at, porta elementum ex. Vivamus sed ligula felis. Sed erat
          tellus, interdum vel venenatis sit amet, rhoncus vel lectus.{'\n\n'}{' '}
          Duis vitae lectus maximus, pellentesque lectus non, eleifend neque.
          Duis efficitur, orci eu vulputate pellentesque, metus ex vehicula
          nunc, eu sodales purus neque ut lectus. In vitae sodales sem, et
          dapibus mauris. Cras vel nisi risus. Nam pellentesque euismod risus eu
          rhoncus. Integer eget arcu at dui sollicitudin sodales. Duis eu
          viverra nulla. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut a accumsan lorem. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Praesent
          tincidunt, leo non tempor hendrerit, massa sapien finibus quam, sed
          laoreet tortor augue ac ex. Integer et sem vel sapien pretium cursus.
          Donec congue, est quis interdum malesuada, lectus urna elementum
          tellus, ac sodales mi diam sed metus. Aenean pulvinar arcu quis arcu
          scelerisque, ut rhoncus nisi maximus. Aliquam et quam sed diam laoreet
          molestie. Curabitur eget eleifend velit.{'\n\n'} Nunc laoreet sapien a
          posuere suscipit. Donec egestas, urna a posuere finibus, neque massa
          molestie ligula, sed accumsan lacus magna nec enim. Donec ornare,
          massa sit amet ornare efficitur, lorem enim imperdiet est, at
          fermentum quam metus et urna. Nunc vitae pretium sem, fringilla
          aliquam felis. Vestibulum risus nibh, tincidunt faucibus ultricies
          nec, lobortis non tortor. Duis vitae tortor euismod, tempus leo a,
          dictum sem. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </Text>
      </AnimatedHeader>
    </>
  );
};

export default Main;
