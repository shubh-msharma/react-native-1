import { useState } from 'react'
import {View,Text,Modal,TouchableOpacity, ActivityIndicator, Pressable, Image} from 'react-native'

export default ()=>{
    const [showModal,setShowModal] = useState(false);
    const activateModal = () =>{
        setShowModal(true)
    }
    const hideModal = () =>{
        setShowModal(false)
    }
    return (
        <View className = "h-full" style={{

        }}>

            <Text>
                text in background
            </Text>
            {/* <ModelWithCardWithCloseButton 
                showModal={showModal} 
                activateModal = {activateModal} 
                hideModal = {hideModal}/> */}

                {/* <ModalWithActivityIndicator
                    showModal={showModal} 
                    activateModal = {activateModal} 
                    hideModal = {hideModal}
                /> */}
            <ModalWithRatingCard 
                showModal={showModal} 
                activateModal = {activateModal} 
                hideModal = {hideModal}
            />
            <TouchableOpacity 
                onPress={()=>{
                    setShowModal(true)
                }}>
                <Text>Open Model</Text>
            </TouchableOpacity>
        </View>
    )
}

const ModalWithRatingCard = ({
    showModal,hideModal,activateModal
}) => {
    const imgHeight = 100
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <Modal
            visible = {showModal}
            transparent
            animationType='slide'
        >
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'rgba(0,0,0,0.2)'
                }}
            >
                <View
                    style={{
                        width:"90%",
                        // height:100,
                        backgroundColor:"white",
                        borderRadius: 20,
                        position:'relative'
                    }}
                >
                    <Image
                        source={require("../../assets/generic_icons/star.png")}
                        style = {{
                            width:100,
                            height:imgHeight,
                            position:'absolute',
                            margin:'auto',
                            top: - imgHeight * 0.40,
                            // left:0,
                            // right:0,
                            // bottom:0,
                            alignSelf:'center'
                        }}
                    />
                    <Text style = {{
                        alignSelf:'center',
                        marginTop:50,
                        fontSize:30,
                        fontWeight:'600'
                    }}>Rate our app</Text>
                    <View className="flex-row justify-center items-center mt-3 space-x-3">
                        {
                            new Array(5).fill().map((item,index)=>{
                                return <Pressable 
                                            onPress={()=>{
                                                setSelectedIndex(index+1)
                                            }}
                                        >
                                                <Image
                                            key={index}
                                            source = {require("../../assets/generic_icons/star_outline.png")}
                                            style = {{
                                                width:20,
                                                height:20,
                                                tintColor: index+1 <= selectedIndex ? "red" : "black",
                                            }}
                                        />
                                    </Pressable>
                            })
                        }
                    </View>
                    <View className="justify-normal items-center p-2 mt-3">
                        <TouchableOpacity
                            onPress={hideModal}
                            className = "border-[1px] p-2 rounded-[20px] bg-neutral-100"
                        >
                            <Text className = "text-lg font-bold text-neutral-600">Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const ModalWithActivityIndicator = ({
    showModal,hideModal,activateModal
}) => {
    return <Modal
                visible={showModal}
                transparent
                animationType='slide'
            >
                <Pressable 
                onPress={hideModal}
                style = {{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'rgba(0,0,0,0.2)'
                }}>
                    <View style = {{
                        height:100,
                        width:100,
                        backgroundColor:'white',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <ActivityIndicator size={'large'}/>
                    </View>
                </Pressable>
                
        </Modal>
}

const ModelWithCardWithCloseButton = ({showModal,activateModel,hideModal}) =>{
    return <Modal 
    transparent
    animationType='slide'
    visible={showModal}>
    <View style = {{
            flex:1,
            backgroundColor:"rgba(0,0,0,0.3)",
            justifyContent:'center',
            alignItems:'center'
        }}>
            <View style={{
                width:"90%",
                height:"30%",
                backgroundColor:"white",
                borderRadius:20,
                position:"relative",
                justifyContent:'center',
                alignItems:'center'
            }}>
                <TouchableOpacity
                    onPress={hideModal}
                    style={{
                        position:"absolute",
                        right:10,
                        borderRadius:20,
                        top:5
                    }}
                    >
                    <Text style={{fontSize:30,backgroundColor:"red", borderRadius:10}}>[X]</Text>
                </TouchableOpacity>
            </View>
    </View>
</Modal>
}