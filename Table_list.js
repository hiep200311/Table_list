const employeeData = [
  {
    employee: "Men Ho",
    location: "xperc",
    department: "Sale,Compounding360,[xCorp] QA,X-ID",
    wfh: 3,
    trainingLeave: 1,
    wfhTraining: 0,
    annualLeave: 2,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 6.5,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/24/avatar.jpg?2024-11-27T10:27:46.706075226", //
  },
  {
    employee: "Luat Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/25/avatar.jpg?2023-07-06T12:07:23.855491205",
  },
  {
    employee: "Van Le",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/27/avatar.jpg?2023-07-20T03:58:45.495206035",
  },
  {
    employee: "Dat Tran",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/0fad2a07ddba7b634cf2a8b0d61d3880.jpg",
  },
  {
    employee: "Vi Vo",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/eae17b1e5fee651f01ba572f8a742a4a/vivo.PNG",
  },
  {
    employee: "Ngan Le",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/8d769aaa286e35d82932d7497969ea7b/65508f86e33af92c308eaffb6eb53509.jpg",
  },
  {
    employee: "Huy Dinh",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/31/avatar.jpg?2024-11-15T03:20:06.805876184",
  },
  {
    employee: "Lưu Ngọc Đỏ",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/1faefece134f588896eaae1991372ab3/chimcanhcut.jfif",
  },
  {
    employee: "Anh Bui",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/2825b2c1d06aae367d7c82ae0e03f594/1664166420560.jpg",
  },
  {
    employee: "Ngan Vu",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/50/avatar.jpg?2024-03-22T07:50:52.050054128",
  },
  {
    employee: "Chinh Le",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/370694fbe17a211e6233f79fadeefc24/IMG_0891.jpg",
  },
  {
    employee: "Tung Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/81/avatar.jpg?2023-08-01T04:31:08.215505160",
  },
  {
    employee: "Duc Le",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/d9bd31ebe954f4a3035d1a975cb0496d/B7294195-B335-4AB4-AC3C-F16C71F668D4.jpeg",
  },
  {
    employee: "Thong Pham",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/becee84d026ae9912a74202448e239b2/avatar.png",
  },
  {
    employee: "Tai Tran",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/b7ba15ee3d749c00fa163546b36d48d1/22-1-23.jpg",
  },
  {
    employee: "Nam Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/109/avatar.jpg?2023-08-07T06:18:31.708978928",
  },
  {
    employee: "Phuoc Dang",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    employee: "Chi Ho",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/144/avatar.jpg?2024-02-21T03:15:45.749809797",
  },
  {
    employee: "Duy Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/a0b414fab075d8c4bcae429f2245b174/image.png",
  },
  {
    employee: "Tuyn Phan",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/167/avatar.jpg?2024-05-17T04:16:42.742042726",
  },
  {
    employee: "Co Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    employee: "Tin Huynh",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/425/avatar.jpg?2024-01-24T04:49:44.973654922",
  },
  {
    employee: "Ca Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/446/avatar.jpg?2024-01-04T06:03:11.942345964",
  },
  {
    employee: "Ngan Le Xuan",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/460/avatar.jpg?2024-01-04T05:50:53.708704285",
  },
  {
    employee: "Manh Dam",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/511/avatar.jpg?2024-03-22T02:38:44.938298542",
  },
  {
    employee: "Huyen Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/585/avatar.jpg?2024-03-15T04:11:53.271994387",
  },
  {
    employee: "Tung Thanh",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/586/avatar.jpg?2024-06-20T02:28:33.922547925",
  },
  {
    employee: "Dang Tran",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/747/avatar.jpg?2024-04-15T07:51:57.356625759",
  },
  {
    employee: "Tuan Vo",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/748/avatar.jpg?2024-05-02T03:27:42.209448159",
  },
  {
    employee: "Quyen Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/871/avatar.jpg?2024-05-02T10:28:05.121094507",
  },
  {
    employee: "Duy Ho Real",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/2353/avatar.jpg?2024-06-26T04:18:04.297293334",
  },
  {
    employee: "Hai Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/2777/avatar.jpg?2024-07-01T08:19:08.065789231",
  },
  {
    employee: "Nang Tran",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/3041/avatar.jpg?2024-07-15T15:15:40.859452861",
  },
  {
    employee: "Phu Nguyen",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/3042/avatar.jpg?2024-07-15T04:12:34.151469850",
  },
  {
    employee: "Thao Ho",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/3143/avatar.jpg?2024-08-05T03:39:04.307118267",
  },
  {
    employee: "Cuong Dang",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      " https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/370694fbe17a211e6233f79fadeefc24/IMG_0891.jpg",
  },
  {
    employee: "Nam Phan",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/3159/avatar.jpg?2024-08-13T01:27:51.108835503",
  },
  {
    employee: "Nam Ngoc",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/4774/avatar.jpg?2024-11-11T03:50:49.412679276",
  },
  {
    employee: "Hiep Huynh",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/4775/avatar.jpg?2024-11-11T04:46:49.259398209",
  },
  {
    employee: "Trinh Le",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/4776/avatar.jpg?2024-11-12T13:38:10.865679694",
  },
  {
    employee: "Nguyen Binh",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/4779/avatar.jpg?2024-11-18T08:10:40.245938160",
  },
  {
    employee: "Trinh Huynh",
    location: "xperc",
    department: "Compounding360,Devops,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/4801/avatar.jpg?2024-12-01T17:37:26.724580894",
  },
  {
    employee: "Nam Phung",
    location: "xperc",
    department: "General",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
    avatar:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/4809/avatar.jpg?2024-11-30T13:35:42.352336529",
  },
];
let rowsPerPage = 10;
let currentPage = 1;

function populateTable() {
  const tableBody = document.getElementById("employee-data");
  tableBody.innerHTML = "";

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = employeeData.slice(startIndex, endIndex);

  currentData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="display: flex; align-items: center; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);">
        <img src="${data.avatar}" alt="${data.employee}" 
        style="width: 20px; height: 20px; border-radius: 50%; margin-right: 10px;" />
        <span>${data.employee}</span>
      </td>
      <td>${data.location}</td>
      <td nowrap>${data.department}</td>
      <td style="text-align: center;">${data.wfh}</td>
      <td style="text-align: center;">${data.trainingLeave}</td>
      <td style="text-align: center;">${data.wfhTraining}</td>
      <td style="text-align: center;">${data.annualLeave}</td>
      <td style="text-align: center;">${data.maternityLeave}</td>
      <td style="text-align: center;">${data.marriageLeave}</td>
      <td style="text-align: center;">${data.bereavementLeave}</td>
      <td style="text-align: center;">${data.maternityLeaveMale}</td>
      <td style="text-align: center; font-weight: 900; font-size: 16px;">${data.total}</td>
    `;
    tableBody.appendChild(row);
  });

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const showingEntries = document.getElementById("showing-entries");
  const totalEntries = employeeData.length;
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);
  showingEntries.textContent = ` ${employeeData.length} Total`;
  document.getElementById("current-page").textContent = `${currentPage}`;
}

function setupPaginationControls() {
  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage * rowsPerPage < employeeData.length) {
      currentPage++;
      populateTable();
    }
  });

  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      populateTable();
    }
  });

  document.getElementById("first-page").addEventListener("click", () => {
    currentPage = 1;
    populateTable();
  });

  document.getElementById("last-page").addEventListener("click", () => {
    currentPage = Math.ceil(employeeData.length / rowsPerPage);
    populateTable();
  });
}

document.getElementById("role").addEventListener("change", (event) => {
  rowsPerPage = parseInt(event.target.value);
  currentPage = 1;
  populateTable();
});

document.getElementById("search").addEventListener("input", handleSearch);

function handleSearch() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const tableBody = document.getElementById("employee-data");
  tableBody.innerHTML = "";

  const filteredData = employeeData.filter((data) => {
    return Object.values(data).join(" ").toLowerCase().includes(searchValue);
  });

  filteredData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="display: flex; align-items: center; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);">
        <img src="${data.avatar}" alt="${data.employee}" 
        style="width: 20px; height: 20px; border-radius: 50%; margin-right: 10px;" />
        <span>${data.employee}</span>
      </td>
      <td>${data.location}</td>
      <td nowrap>${data.department}</td>
      <td style="text-align: center;">${data.wfh}</td>
      <td style="text-align: center;">${data.trainingLeave}</td>
      <td style="text-align: center;">${data.wfhTraining}</td>
      <td style="text-align: center;">${data.annualLeave}</td>
      <td style="text-align: center;">${data.maternityLeave}</td>
      <td style="text-align: center;">${data.marriageLeave}</td>
      <td style="text-align: center;">${data.bereavementLeave}</td>
      <td style="text-align: center;">${data.maternityLeaveMale}</td>
      <td style="text-align: center; font-weight: 900; font-size: 16px;">${data.total}</td>
    `;
    tableBody.appendChild(row);
  });

  updatePaginationInfo();
}

populateTable();
setupPaginationControls();

const dropdown = document.getElementById("period");
const dropdownBtn = dropdown.querySelector(".dropdown-btn");
const dropdownContent = dropdown.querySelector(".dropdown-content");

dropdownContent.style.display = "none";

dropdownBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  if (
    dropdownContent.style.display === "none" ||
    dropdownContent.style.display === ""
  ) {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
});

dropdownContent.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    dropdownBtn.textContent = event.target.textContent;

    dropdownContent.style.display = "none";
  }
});
// dropdownContent.addEventListener("click", (event) => {
//   if (event.target.tagName === "A") {
//     const selectedText = event.target.textContent;
//     selectedOptionSpan.textContent = "Selected Option: " + selectedText;
//     selectedOptionSpan.style.display = "inline";
//     dropdownContent.style.display = "none";
//   }
// });

const periodBtn = document.querySelector(".period-btn");
const periodContent = document.querySelector(".period-content");
const periodLinks = document.querySelectorAll(".period-content a");

periodBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  periodContent.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (
    !periodContent.contains(event.target) &&
    !periodBtn.contains(event.target)
  ) {
    periodContent.classList.remove("show");
  }
});

periodLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const selectedValue = event.target.getAttribute("data-value");
    periodBtn.textContent = event.target.textContent;
    periodContent.classList.remove("show");

    console.log(`Selected value: ${selectedValue}`);
  });
});
