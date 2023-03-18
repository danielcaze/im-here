import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert, Keyboard } from "react-native";
import { Participant } from "../../components/Participant";
import { homeStyles } from "./styles";

export function Home() {
  const participantsList = [{ name: 'Daniel', id: "1" }, { name: 'Lidia', id: "2" }, { name: 'Cayo', id: "3" }, { name: 'Melissa', id: "4" }, { name: 'Darwin', id: "5" }]
  const [participants, setParticipants] = useState(participantsList)
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (!participantName) {
      return Alert.alert('Nome inválido', 'O nome que você digitou é inválido.')
    }

    setParticipants(state => [...state, { name: participantName, id: String(state.length + 1) }])
    setParticipantName('')
    Keyboard.dismiss()
  }

  function handleParticipantRemove(id: string) {
    return () => {
      const participantName = participants.find(participant => participant.id === id)?.name
      Alert.alert('Remover', `Deseja remover o participante ${participantName}?`, [
        {
          text: 'Sim',
          onPress: () => {
            Alert.alert('Deletado!')
            setParticipants(state => state.filter(participant => participant.id !== id))
          },
          style: 'destructive'
        },
        {
          text: 'Não',
          style: "cancel"
        }
      ]
      )
    }
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do evento</Text>
      <Text style={homeStyles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={homeStyles.form}>
        <TextInput
          style={homeStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={homeStyles.button} onPress={handleParticipantAdd}>
          <Text style={homeStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(participant) => participant.id}
        renderItem={({ item: participant }) => (
          <Participant
            name={participant.name}
            onPress={handleParticipantRemove(participant.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={homeStyles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}