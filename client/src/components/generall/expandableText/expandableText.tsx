import React, { type FC, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { type expandableTextType } from './expandableText.type';
import { styles } from './expandableText.style';

const ExpandableText: FC<expandableTextType> = ({ text, length }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded
        ? (
        <Text style={styles.text}>{text}</Text>
          )
        : (
        <Text style={styles.text}>
          {text.slice(0, length)}...
          <Pressable
            onPress={() => {
              setExpanded(true);
            }}
          >
            <Text style={styles.button}>Read more</Text>
          </Pressable>
        </Text>
          )}
    </>
  );
};

export default ExpandableText;
