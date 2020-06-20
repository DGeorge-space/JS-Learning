const ATTACK_VALUE = 10; // this is a maximum value 
const MONSTER_ATTACK_VALUE = 14; // the max monster damage
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20 ; 


// common to put consts in uppercase separated by _ 
let chosenMaxLife= 100; 
let currentMonsterHealth= chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound(){
    
    if(currentMonsterHealth <=0 && currentPlayerHealth > 0){
        alert('You Won!');
    }else if(currentPlayerHealth<=0 && currentMonsterHealth > 0){
        alert('You Lost!');
    }else if(currentMonsterHealth<=0 && currentMonsterHealth <=0){
        alert('You both died!');
    }
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
}

function attackMonster(mode){
    let maxDamage;
    if(mode==='ATTACK'){
        maxDamage= ATTACK_VALUE;
    }else{
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage= dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
 
    endRound();

}

function attackHandler(){
    attackMonster('ATTACK');
    

}
function strongAttackHandler(){
        attackMonster('STRONG_ATTACK');
}
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= (chosenMaxLife- HEAL_VALUE)){
        alert('You can\'t heal to more than max health')
        healValue = chosenMaxLife-currentPlayerHealth;
    }else{
        
    }

    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth+=HEAL_VALUE;
    endRound();

}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);