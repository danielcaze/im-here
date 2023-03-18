import { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { participantStyle } from "./styles";

type ParticipantProps = ComponentProps<typeof TouchableOpacity> & {
  name: string,
}

export function Participant({ name, onPress }: ParticipantProps) {
  return (
    <View style={participantStyle.container}>
      <Text style={participantStyle.name}>{name}</Text>
      <TouchableOpacity style={participantStyle.button} onPress={onPress}>
        <Text style={participantStyle.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}