import {Modal,StyleSheet, View} from 'react-native'

const ToDoModal = ({Element,visibility}) =>{
    return (
        <Modal visible = {visibility}>
            <View style={styles.modal}>
                <Element/>
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
   modal:{
    backgroundColor:'blue',
    flex:1
   }
})

export default ToDoModal;