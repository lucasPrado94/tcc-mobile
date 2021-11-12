import React from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export function OccurrenceDataForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <Text style={styles.labelSmall}>Quem está abrindo a ocorrência? Não obrigatório.</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Tipo do problema</Text>
      <Text style={styles.labelSmall}>Selecione a opção que se trata a ocorrência.</Text>
      <View style={styles.pickerContainer}>
        <Picker>
          <Picker.Item label="Água e esgoto" value="1" />
          <Picker.Item label="Coleta de lixo e limpeza de vias" value="2" />
          <Picker.Item label="Drenagem de água da chuva" value="3" />
          <Picker.Item label="Pavimentação" value="4" />
          <Picker.Item label="Trânsito e tráfego" value="5" />
          <Picker.Item label="Transporte Coletivo" value="6" />
          <Picker.Item label="Iluminação pública" value="7" />
          <Picker.Item label="Energia elétrica" value="8" />
          <Picker.Item label="Serviços telefênicos" value="9" />
          <Picker.Item label="Distribuição de gás" value="10" />
          <Picker.Item label="Educação e ensino" value="11" />
          <Picker.Item label="Saúde e higiene" value="12" />
          <Picker.Item label="Assistência social" value="13" />
          <Picker.Item label="Mercados, feiras e matadouros" value="14" />
          <Picker.Item label="Serviço funerário" value="15" />
          <Picker.Item label="Segurança pública" value="16" />
          <Picker.Item label="Esportes, lazer, cultura e recreação" value="17" />
          <Picker.Item label="Defesa civil" value="18" />
        </Picker>
      </View>

      <Text style={styles.label}>Fotos</Text>
      <Text style={styles.labelSmall}>Adicione fotos do problema para
        que a administração possa saber a situação em que se encontra.</Text>
      <TouchableOpacity style={styles.imagesInput} onPress={() => { }}>
        <Feather name="plus" size={24} color="#009E86" />
      </TouchableOpacity>

      <Text style={styles.label}>Observações</Text>
      <Text style={styles.labelSmall}>Deseja adicionar mais alguma informação sobre o problema?</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
      />
    </View>
  );
}