$(() => {
	openAboutMe = () => {
        $('.imgAndBackground').css('display', 'none')
        $('.projectsContainer').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.aboutMe').css('display', 'block')
        $('#Home').css('display', 'block')
    }

    openProjects = () => {
        $('.aboutMe').css('display', 'none')
        $('.imgAndBackground').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.projectsContainer').css('display', 'flex')
        $('.projectsContainer').css('justify-content', 'space-around')
        $('#Home').css('display', 'block')
        
    }
    openResume = () => {
        $('.aboutMe').css('display', 'none')
        $('.imgAndBackground').css('display', 'none')
        $('.projectsContainer').css('display', 'none')
        $('.resume').css('display', 'block')
        $('#Home').css('display', 'block')

    }

    returnHome = () => {
        $('.projectsContainer').css('display', 'none')
        $('.aboutMe').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.resume').css('display', 'none')
        $('.imgAndBackground').css('display', 'block')
        $('#Home').css('display', 'none')


    }


    $('#About').on('click', openAboutMe)
    $('#Projects').on('click', openProjects)
    $('#Resume').on('click', openResume)
    $('#Home').on('click', returnHome)

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