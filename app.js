$(() => {
	const openAboutMe = () => {
        $('.imgAndBackground').css('display', 'none')
        $('.projectsContainer').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.aboutMe').css('display', 'block')
        $('#Home').css('display', 'block')
        // $('#About').css('background', 'lightblue')
    }

    const openProjects = () => {
        // unBlue()
        $('.aboutMe').css('display', 'none')
        $('.imgAndBackground').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.projectsContainer').css('display', 'flex')
        $('.projectsContainer').css('justify-content', 'space-around')
        $('#Home').css('display', 'block')
        // $('#About').css('background', 'lightblue')
        
    }
    const openResume = () => {
        // unBlue()
        $('.aboutMe').css('display', 'none')
        $('.imgAndBackground').css('display', 'none')
        $('.projectsContainer').css('display', 'none')
        $('.resume').css('display', 'block')
        $('#Home').css('display', 'block')
        // $('#Resume').css( 'background', 'lightblue')

    }

    const returnHome = () => {
        // unBlue()
        $('.projectsContainer').css('display', 'none')
        $('.aboutMe').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.imgAndBackground').css('display', 'block')
        $('#Home').css('display', 'none')


    }
    darkMode = false
    const toggleDarkMode = () => {
            if (darkMode == false) {
                $('body').css('background', 'gray')
                $('#darkmode').css('color', 'yellow')
                darkMode = true
            } else {
                $('body').css('background', 'rgb(151, 181, 191)')
                $('#darkmode').css('color', 'gray')
                darkMode = false
            }
    }
    // const unBlue = () => {
    //     $('.topdiv').css( 'background', 'rgb(151, 181, 191)')
    //     $('.topdiv').hover(function() {
    //         $(this).css( 'background-color', 'lightblue')
    //     }, function(){
    //         $(this).css("background-color", "rgb(151, 181, 191)");
    //       })
    //     }
    // unBlue()
    $('#About').on('click', openAboutMe)
    $('#Projects').on('click', openProjects)
    $('#Resume').on('click', openResume)
    $('#Home').on('click', returnHome)
    $('#Home').on('click', returnHome)
    $('#darkmode').on('click', toggleDarkMode)

    let currentProjectIndex = 0

    const numOfProjects = $('.projectImgs').children().length - 1

    $('.next').on('click', () => {
            $('.projectImgs').children().eq(currentProjectIndex).css('display', 'none')

            if (currentProjectIndex < numOfProjects) {
                currentProjectIndex++
            } else {
                currentProjectIndex = 0
            }
            $('.projectImgs').children().eq(currentProjectIndex).css('display', 'block')
    })


    $('.previous').on('click', () => {
        $('.projectImgs').children().eq(currentProjectIndex).css('display', 'none')

        if (currentProjectIndex > 0) {
            currentProjectIndex--
        } else {
            currentProjectIndex = numOfProjects
        }
        $('.projectImgs').children().eq(currentProjectIndex).css('display', 'block')
})















});