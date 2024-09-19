import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:([
        {
            id: 1,
            name: "Labrador Retriever",
            characteristics: "Friendly, outgoing, and high-spirited companions. Known for their intelligence and trainability.",
            region: "Newfoundland, Canada",
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTx_J-pWMcyuxVHWqKQv5eHQkkIldmDIVxuxQ3nbdUh9SVzCDdL'
          },
          {
            id: 2,
            name: "German Shepherd",
            characteristics :"Confident, courageous, and smart. Known for their loyalty and guarding abilities.",
            region: "Germany",
            imageUrl: 'https://worldanimalfoundation.org/wp-content/uploads/2024/02/german-shepherd-2-3-1536x880.jpg'
          },
          {
            id: 3,
            name: "Golden Retriever",
            characteristics: "Intelligent, friendly, and devoted. Known for their calm demeanor and affectionate nature.",
            region: "Scotland",
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFK6f14Xd4QneSSANNFVnZXGi0p4joZf3NrqyLCQ5haU2ex-39ILeVRsJ35FElQ2JRdg&usqp=CAU'
          },
          {
            id: 4,
            name: "Bulldog",
            characteristics: "Docile, willful, and friendly. Known for their distinctive pushed-in nose and wrinkled face.",
            region: "England",
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmHY0qpbMwqYeCJvS3SWzlhFuH5-sch35KMQXNOufSbS6BsDXB_ACxnlr3bOnSqDNWeG0ldu0tl5Lp0UkS04mppjTNfAhe8dTMkwJt8A'
          },
          {
            id: 5,
            name: "Beagle",
            characteristics: "Curious, friendly, and merry. Known for their keen sense of smell and tracking abilities.",
            region: "England",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg"
          },
          {
            id: 6,
            name: "Poodle",
            characteristics: "Intelligent, active, and alert. Known for their hypoallergenic coat and various sizes.",
            region: "Germany and France",
            imageUrl: 'https://thumbs.dreamstime.com/b/gorgeous-poodle-taking-stage-smiling-camera-240918363.jpg'
          },
          {
            id: 7,
            name: "Rottweiler",
            characteristics: "Confident, fearless, and good-natured. Known for their strength and guarding instincts.",
            region: "Germany",
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILIoJCgFrCftz7MWzyV_65a1OA2BgnVV_MA&s'
          },
          {
            id: 8,
            name: "Siberian Husky",
            characteristics: "Friendly, gentle, and alert. Known for their striking blue eyes and endurance.",
            region: "Siberia, Russia",
            imageUrl: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg"
          },
          {
            id: 9,
            name: "Dachshund",
            characteristics: "Lively, courageous, and clever. Known for their long bodies and short legs.",
            region: "Germany",
            imageUrl: "https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg"
          },
          {
            id: 10,
            name: "Boxer",
            characteristics: "Bright, fun-loving, and active. Known for their muscular build and playful nature.",
            region: "Germany",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Male_fawn_Boxer_undocked.jpg/800px-Male_fawn_Boxer_undocked.jpg"
          },
          {
            id: 11,
            name: "Shih Tzu",
            characteristics: "Affectionate, playful, and outgoing. Known for their long, flowing coats and friendly disposition.",
            region: "Tibet, China",
            imageUrl: "https://cdn.britannica.com/05/234205-050-F8D2E018/Shih-tzu-dog.jpg"
          },
          {
            id: 12,
            name: "Chihuahua",
            characteristics: "Charming, graceful, and sassy. Known for their small size and big personality.",
            region: "Mexico",
            imageUrl: "https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg"
          },
          {
            id: 13,
            name: "Dalmatian",
            characteristics: "Energetic, playful, and outgoing. Known for their distinctive black or liver spots on a white coat.",
            region: "Croatia",
            imageUrl: "https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg"
          },
          {
            id: 14,
            name: "Great Dane",
            characteristics: "Friendly, patient, and dependable. Known for their giant size and gentle nature.",
            region: "Germany",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDmHAof3M_ISw8NuLS3MZjo3Gl5CMbsvDQw&s"
          },
          {
            id: 15,
            name: "Cocker Spaniel",
            characteristics: "Gentle, smart, and happy. Known for their long ears and wavy coat.",
            region: "England",
            imageUrl: "https://www.akc.org/wp-content/uploads/2017/11/English-Cocker-Spaniel-Slide03.jpg"
          },
          {
            id: 16,
            name: "Pomeranian",
            characteristics: "Lively, bold, and inquisitive. Known for their fluffy coats and fox-like faces.",
            region: "Germany and Poland",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99dD0VjCMxVHLlC3nWfWaUJNgwFS5iA7jRw&s"
          },
          {
            id: 17,
            name: "Doberman Pinscher",
            characteristics: "Fearless, loyal, and alert. Known for their sleek coats and muscular build.",
            region: "Germany",
            imageUrl: "https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg"
          },
          {
            id: 18,
            name: "Australian Shepherd",
            characteristics: "Smart, work-oriented, and exuberant. Known for their intelligence and herding ability.",
            region: "United States",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS3W7oGQJhUQoWBkHDxntM9NN7QrWQabSTA&s"
          },
          {
            id: 19,
            name: "Maltese",
            characteristics: "Gentle, playful, and charming. Known for their long, silky white coats.",
            region: "Mediterranean Basin",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo_XQjCF67wuRq9rbkL0pyHTDAqJJkfw4BA&s"
          },
          {
            id: 20,
            name: "Boston Terrier",
            characteristics: "Friendly, bright, and amusing. Known for their tuxedo-like markings and expressive eyes.",
            region: "United States",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wSa6AMrFJOEqBuQjW38uppTv_xaRiXoocw&s"
          }
    ])
}
const dogSlice = createSlice({
    name:"state",
    initialState,
    reducers:{
        addToDog(state,action){
          console.log(action.payload)
            state.items=[...state.items,action.payload]
        }

    }
}
)
export  const dogReducer=dogSlice.reducer
export  const {addToDog}=dogSlice.actions


