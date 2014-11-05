<?php

    function fix_gabes_name()
    {
        $CI=get_instance();
        $output=$CI->output->get_output();

        while(strpos($output,'Pena')!==FALSE)
        {
            $output=str_replace($output,'Pena','Pe&ntilde;a');
        }

        return $output;
    }